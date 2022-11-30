import http  from 'http';
import fsp from 'fs/promises';
import express from 'express';

const app = express();

app.get ( '/index' async (req, res) => {
  if (req.url === "/")   {
    const content = await fsp.readFile('index.html','utf-8');
  res.statusCode = 200;
  res.end(content);

});

app.get ('/about' async (req, res) => {
    if (req.url === "/")   {
      const content = await fsp.readFile('about.html','utf-8');
    res.statusCode = 200;
    res.end(content);
  
  });

const hostname = '127.0.0.1';
const port = 3000;


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


