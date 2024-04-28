import { Request, Response } from "express";
import { IncomeService } from "../services/IncomeService";
import { IIncome } from "../ts/IIncome";

export class IncomeController {
  private incomeService: IncomeService;

  constructor(incomeService = new IncomeService()) {
    this.incomeService = incomeService;
  }

  public async new(request: Request, response: Response): Promise<Response> {
    const income: IIncome | any = request.body;

    if (!income.title)
      return response
        .status(400)
        .json({ message: "Bad request: title required!" })

    if (!income.total)
      return response
        .status(400)
        .json({ message: "Bad request: total required!" })
        
    if (!income.date)
      return response
        .status(400)
        .json({ message: "Bad request: date required!" })

    try {
      const result = await this.incomeService.create(income)

      return response
        .status(201)
        .json({ message: "income created", income: result })

    } catch (error) {
      return response
        .status(500)
        .json({ message: "Internal Server Error: ", error })
    }
  }
}
