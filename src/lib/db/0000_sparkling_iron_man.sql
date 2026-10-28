CREATE TABLE "cds" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"album" text NOT NULL,
	"artist" text NOT NULL,
	"year" integer
);
