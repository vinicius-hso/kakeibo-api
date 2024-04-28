import { Request, Response } from "express";
// import { UserService, AuthorizationService } from "../services";
// import { IUser } from "../ts";


export class IncomeController {
//   userService: UserService;
//   authService: AuthorizationService;

  constructor(
    // userService = new UserService(),
    // authService = new AuthorizationService()
  ) {
    // this.userService = userService;
    // this.authService = authService;
  }

  public async new(request: Request, response: Response): Promise<Response> {
   const income = request.body
    
    return response.status(200).json({ message: "income created", income: income });
  }

  
}
