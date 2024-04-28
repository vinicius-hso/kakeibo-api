CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table if not exists incomes (
	"id" uuid primary key DEFAULT uuid_generate_v4 (),
    "title" varchar(100) not null,
    "total" float not null,
    "date" timestamp not null,
	"created_at" timestamp not null default current_timestamp
);
