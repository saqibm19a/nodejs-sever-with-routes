import { createServer } from 'node:http';

const port = 3000;

const server = createServer((req, res) => {
    const { method, url } = req;
    
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the homepage!');
      }
      
});



server.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});
