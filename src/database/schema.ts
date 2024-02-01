import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

const uuidv4 = (name: string) => varchar(name, { length: 36 });
const bcrypt = (name: string) => varchar(name, { length: 60 });

export const user = mysqlTable("user", {
	id: int("id").autoincrement().primaryKey(),
	username: varchar("username", {length: 50}).unique(),
	password: bcrypt("password"),
});
