import express from 'express';

import restaurantRoutes from './routes';

import './database';

const server = express();

server.use('/', restaurantRoutes);

server.listen(3333);
