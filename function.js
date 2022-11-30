import http  from 'http';
import fsp from 'fs/promises';


const server = http.createServer(async (req, res) => {

  if (request.url == "/")   {
    const content = await fsp.readFile('index.html','utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(content);
}
else if (request.url === 'about') {
    const content = await fsp.readFile('about.html','utf-8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(content);
} 
else {
    Response.statusCode = 404; 
    res.setHeader('Content-Type', 'text/plain');
    res.end(request.url + 'Not found');

}
});

const hostname = '127.0.0.1';
const port = 3000;


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


