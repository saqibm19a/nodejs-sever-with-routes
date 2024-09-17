import { createServer } from 'node:http';

const port = 3000;

const server = createServer((req, res) => {
    const { method, url } = req;

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the homepage!');
      }else if (req.method === 'POST' && req.url === '/') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            console.log('Received POST data:', body);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('POST request received at homepage!');
        });
        }else if (req.method === 'POST' && req.url === '/') {
            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', () => {
              console.log('Received POST data:', body);
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              res.end('POST request received at homepage!');
            });
          }else if (req.method === 'PUT' && req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('PUT request received at homepage!');
          }else if (req.method === 'DELETE' && req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('DELETE request received at homepage!');
          }else if (req.url === '/') {
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Method Not Allowed');
          }else if (req.method === 'GET' && req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the About page!');
          }else if (req.method === 'POST' && req.url === '/about') {
            let body = '';
            req.on('data', chunk => { body += chunk.toString(); });
            req.on('end', () => {
              console.log('Received POST data:', body);
              res.writeHead(200, { 'Content-Type': 'text/plain' });
              res.end('POST request received at About page!');
            });
          }else if (req.method === 'PUT' && req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('PUT request received at About page!');
          }else if (req.method === 'DELETE' && req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('DELETE request received at About page!');
          }
          
          
          
          
          
          
          
          

      
});



server.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});
