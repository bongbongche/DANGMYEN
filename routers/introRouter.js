import express from "express";
import routes from "../routes";
import { brand, prd_process } from "../controllers/introController";

const introRouter = express.Router();

introRouter.get(routes.brand, brand);
introRouter.get(routes.prd_process, prd_process);

export default introRouter;
