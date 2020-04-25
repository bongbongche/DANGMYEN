import express from "express";
import routes from "../routes";
import { prd_01, prd_02 } from "../controllers/productController";

const productRouter = express.Router();

productRouter.get(routes.prd_01, prd_01);
productRouter.get(routes.prd_02, prd_02);

export default productRouter;
