import express from 'express';

const server = express();

server.use('/', (request, response) => {
  return response.json({ ok: true })
});

server.listen(3333);