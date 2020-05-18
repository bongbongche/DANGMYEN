import express from "express";
import routes from "../routes";
import {
  cooking_01,
  cooking_02,
  cooking_03,
  cooking_04,
} from "../controllers/cookingController";

const cookingRouter = express.Router();

cookingRouter.get(routes.cooking_01, cooking_01);
cookingRouter.get(routes.cooking_02, cooking_02);
cookingRouter.get(routes.cooking_03, cooking_03);
cookingRouter.get(routes.cooking_04, cooking_04);

export default cookingRouter;
