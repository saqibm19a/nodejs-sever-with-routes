import { createServer } from 'node:http';

const port = 3000;

const server = createServer((req, res) => {
  res.end('Server created');
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});
