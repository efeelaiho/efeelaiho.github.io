const express = require('express');
const helmet = require('helmet');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
      var newHost = req.headers.host.slice(4);
      return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }
  next();
};

app.prepare()
.then(() => {
  const server = express();
  
  server.use(helmet());
  server.use(helmet.hidePoweredBy());
  server.use(helmet.referrerPolicy());
  server.set('trust proxy', true);
  server.use(wwwRedirect);

  server.get('/efe_elaiho_resume.pdf', (req, res) => {
    var data = fs.readFileSync('./static/efe_elaiho_resume.pdf');
    res.contentType("application/pdf");
    res.send(data);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000');
  });
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});




