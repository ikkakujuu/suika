import express from 'express';

const router = express.Router();

router.get('/', (request, response) => response.sendStatus(501));

export default router;
