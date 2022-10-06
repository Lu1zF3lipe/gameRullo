import { Response, Router, Request  } from "express";

const gameRoute = Router();

gameRoute.get('/game', ( req: Request, res: Response) => {
    res.sendStatus(200);
});

export { gameRoute };