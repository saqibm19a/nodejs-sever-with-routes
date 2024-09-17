import { createServer } from 'node:http';

const port = 3000;


const server = createServer((req, res) => {
  const { method, url } = req;
  
  if (url === '/') {
     // Root route
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Welcome to the homepage!');
    } else if (method === 'POST') {
      let body = '';
      req.on('data', (chunk) => { body += chunk.toString(); });
      req.on('end', () => {
        console.log('Received POST data:', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received at homepage!');
      });
    } else if (method === 'PUT') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('PUT request received at homepage!');
    } else if (method === 'DELETE') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('DELETE request received at homepage!');
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
    
  } else if (url === '/about') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the About page!');
    } else if (method === 'POST') {
      let body = '';
      req.on('data', (chunk) => { body += chunk.toString(); });
      req.on('end', () => {
        console.log('Received POST data:', body);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('POST request received at About page!');
      });
    } else if (method === 'PUT') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('PUT request received at About page!');
    } else if (method === 'DELETE') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('DELETE request received at About page!');
    } else {
      res.writeHead(405, { 'Content-Type': 'text/plain' });
      res.end('Method Not Allowed');
    }
    
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route Not Found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Server listening on http://127.0.0.1:${port}`);
});
