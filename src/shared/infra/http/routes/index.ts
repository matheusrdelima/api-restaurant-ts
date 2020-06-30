import { Router } from 'express';

const routes = Router();

routes.use('/restaurants', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

export default routes;
