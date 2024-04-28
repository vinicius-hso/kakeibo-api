import { Router, Request, Response } from "express";
import income from "./income";

const routes = Router();

routes.use("/incomes", income);

routes.use((req: Request, res: Response) =>
  res.status(404).json({ error: "Unknown request" })
);

export default routes;
