import { pgTable, serial, text, varchar, timestamp, } from "drizzle-orm/pg-core";

export const consultations = pgTable("consultations", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  name: varchar("name", { length: 256 }).notNull(),
  phone: varchar("phone", { length: 10 }).notNull(),
  studyYear: varchar("studyYear", { length: 4 }).notNull(),
  studyIntake: varchar("studyIntake").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: varchar("content").notNull(),
  image: varchar("image").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
});