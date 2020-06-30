import { Router } from 'express';

const restaurantsRouter = Router();

restaurantsRouter.get('/', (request, response) => response.json({ ok: false }));

export default restaurantsRouter;
