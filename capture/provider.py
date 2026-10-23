"""Loopback-only canned provider for Aider's real response renderer; no inference."""
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
from pathlib import Path
import sys


class DemoProvider(BaseHTTPRequestHandler):
    def log_message(self, *_):
        pass

    def do_POST(self):
        body = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        if self.path != '/v1/chat/completions':
            self.send_error(404)
            return
        review = Path(sys.argv[2]).read_text()
        common = {'id': 'chatcmpl-local-demo', 'object': 'chat.completion.chunk',
                  'created': 1767268800, 'model': 'local-demo'}
        self.send_response(200)
        if body.get('stream'):
            self.send_header('Content-Type', 'text/event-stream')
            self.end_headers()
            for delta, finish in (({'role': 'assistant', 'content': review}, None), ({}, 'stop')):
                chunk = {**common, 'choices': [{'index': 0, 'delta': delta, 'finish_reason': finish}]}
                self.wfile.write(('data: ' + json.dumps(chunk) + '\n\n').encode())
            self.wfile.write(b'data: [DONE]\n\n')
        else:
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({**common, 'object': 'chat.completion', 'choices': [{
                'index': 0, 'message': {'role': 'assistant', 'content': review}, 'finish_reason': 'stop'}],
                'usage': {'prompt_tokens': 0, 'completion_tokens': 0, 'total_tokens': 0}}).encode())


if __name__ == '__main__':
    with HTTPServer(('127.0.0.1', 0), DemoProvider) as server:
        Path(sys.argv[1]).write_text(str(server.server_port))
        server.serve_forever()
