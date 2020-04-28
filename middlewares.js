import routes from "./routes";

export const localsMiddlewares = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
