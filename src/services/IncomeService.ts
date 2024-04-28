import { DataSource } from "typeorm";
import { IIncome } from "../ts/IIncome";
import Income from "../models/income";
import postgresDataSource from "../database/PostgresDataSource";

export class IncomeService {
  private dataSource: DataSource;

  constructor(database = postgresDataSource) {
    this.dataSource = database;
  }

  public async create(income: IIncome): Promise<Response | IIncome> {
    const newIncome = new Income();

    Object.assign(newIncome, income);

    const result: any = await this.dataSource.manager
      .save(Income, newIncome)

    return result
  }

  public async getById(incomeId: string): Promise<Response | IIncome | null> {
    const income: IIncome[] | any = await this.dataSource.manager.findOneBy(
      Income,
      { id: incomeId }
    );

    return income;
  }

  public async delete(income: IIncome): Promise<Response> {
    const result: any = await this.dataSource.manager.delete(
        Income, 
        { id: income.id }
    )

    return result;
  }
}
