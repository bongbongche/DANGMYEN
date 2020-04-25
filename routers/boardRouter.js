import express from "express";
import routes from "../routes";
import { notice, ask, news } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get(routes.notice, notice);
boardRouter.get(routes.ask, ask);
boardRouter.get(routes.news, news);

export default boardRouter;
