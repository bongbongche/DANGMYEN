import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";
import { localsMiddlewares } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import companyRouter from "./routers/companyRouter";
import introRouter from "./routers/introRouter";
import productRouter from "./routers/productRouter";
import boardRouter from "./routers/boardRouter";
import cookingRouter from "./routers/cookingRouter";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/static", express.static("static"));
app.use(morgan("dev"));
app.use(localsMiddlewares);

app.use(routes.home, globalRouter);
app.use(routes.company, companyRouter);
app.use(routes.intro, introRouter);
app.use(routes.product, productRouter);
app.use(routes.board, boardRouter);
app.use(routes.cooking, cookingRouter);

export default app;
