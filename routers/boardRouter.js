import express from "express";
import routes from "../routes";
import {
  notice,
  ask,
  news,
  notice_view,
  news_view,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get(routes.notice, notice);
boardRouter.get(routes.notice_view, notice_view);
boardRouter.get(routes.ask, ask);
boardRouter.get(routes.news, news);
boardRouter.get(routes.news_view, news_view);

export default boardRouter;
