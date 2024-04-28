import "../config/dotenv";
import { DataSource } from "typeorm";

const postgresDataSource: DataSource = new DataSource({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  type: "postgres",
  synchronize: false,
  logging: false,
  entities: ["src/models/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
  maxQueryExecutionTime: 2000,
});

postgresDataSource
  .initialize()
  .then(() => {
    console.log("PostgreSQL Data Source initialized!");
  })
  .catch((e) => {
    console.error("PostgreSQL Data Source initialization error:", e);
  });

export default postgresDataSource;
