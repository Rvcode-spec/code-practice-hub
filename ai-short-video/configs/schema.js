import { boolean } from "drizzle-orm/gel-core";
import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

const Users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  imageUrl: varchar('imageUrl', { length: 255 }),
  subscription: boolean('subscription').default(false),
});

export default Users;
