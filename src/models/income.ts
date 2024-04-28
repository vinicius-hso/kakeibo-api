import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn
} from "typeorm";

@Entity("incomes")
export default class Income {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: 100 })
  title: string;

  @Column()
  total: number;

  @Column({ type: "timestamp" })
  date: Date;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}
