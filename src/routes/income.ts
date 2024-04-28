import { Router } from "express";
// import { AuthorizationService } from "../services";
import { IncomeController } from '../controllers/IncomeController';

const routes = Router();

const incomeController = new IncomeController();
// const auth = new AuthorizationService();

// routes.get(
//   "/",
//   [auth.checkRole.bind(auth), auth.authenticateToken.bind(auth)],
//   userController.getAll.bind(userController)
// );
// routes.post("/signup", userController.signUp.bind(userController));
// routes.post("/login", userController.login.bind(userController));

routes.get("/", )
routes.post("/new", incomeController.new.bind(incomeController))

export default routes;
