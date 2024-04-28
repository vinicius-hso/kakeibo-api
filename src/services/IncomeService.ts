import { DataSource } from "typeorm";
import { IIncome } from '../ts/IIncome';
import Income from '../models/income';
import postgresDataSource from "../database/PostgresDataSource";

export class IncomeService {
  private dataSource: DataSource;

  constructor(database = postgresDataSource) {
    this.dataSource = database;
  }

  public async create(income: IIncome): Promise<Response> {
    const newIncome = new Income();

    Object.assign(newIncome, income);

    const result: any = await this.dataSource.manager
      .save(Income, newIncome)
      .catch((error) => {
        return { error: error.message };
      });

    return result;
  }
}