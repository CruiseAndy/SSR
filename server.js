const express = require('express');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    const parseUrl = parse(req.url, true);
    return handle(req, res, parseUrl);
  })
  
  server.listen(port, err => {
    if (err) throw err
    console.log(`Server listen on ${port} port...`);
  })
})