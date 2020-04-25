import express from "express";
import routes from "../routes";
import {
  ceo,
  certification,
  history,
  local,
} from "../controllers/companyController";

const companyRouter = express.Router();

companyRouter.get(routes.ceo, ceo);
companyRouter.get(routes.history, history);
companyRouter.get(routes.certification, certification);
companyRouter.get(routes.local, local);

export default companyRouter;
