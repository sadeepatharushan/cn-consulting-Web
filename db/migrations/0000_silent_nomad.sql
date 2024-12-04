CREATE TABLE IF NOT EXISTS "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" varchar NOT NULL,
	"image" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "consultations" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"name" varchar(256) NOT NULL,
	"phone" varchar(10) NOT NULL,
	"studyYear" varchar(4) NOT NULL,
	"studyIntake" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	CONSTRAINT "consultations_email_unique" UNIQUE("email")
);
