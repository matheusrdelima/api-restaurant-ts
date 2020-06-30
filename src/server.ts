import express from 'express';

import restaurantRoutes from './routes';

const server = express();

server.use('/', restaurantRoutes);

server.listen(3333);
