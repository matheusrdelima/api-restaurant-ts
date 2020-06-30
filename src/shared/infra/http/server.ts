import express from 'express';

import routes from './routes';

import '@shared/infra/typeorm';

const server = express();

server.use('/', routes);

server.listen(3333);
