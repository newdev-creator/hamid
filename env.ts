import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const environmentSchema = z.object({
  EMAIL_SERVICE_ID: z.string(),
  EMAIL_TEMPLATE_ID: z.string(),
  EMAIL_USER_ID: z.string(),
  GOOGLE_EMAIL_HOST: z.string(),
  GOOGLE_EMAIL_USER: z.string(),
  GOOGLE_EMAIL_PASS: z.string(),
  CLIENT_EMAIL: z.string(),
});

const {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID,
  GOOGLE_EMAIL_HOST,
  GOOGLE_EMAIL_USER,
  GOOGLE_EMAIL_PASS,
  CLIENT_EMAIL,
} = process.env;

const parsedResults = environmentSchema.safeParse({
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_ID,
  GOOGLE_EMAIL_HOST,
  GOOGLE_EMAIL_USER,
  GOOGLE_EMAIL_PASS,
  CLIENT_EMAIL,
});

if (!parsedResults.success) {
  console.error("Environment validation failed:", parsedResults.error.format());
  throw new Error("Environment variables don't match the schema");
}

export const environmentVariables = parsedResults.data;

type EnvVarSchemaType = z.infer<typeof environmentSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvVarSchemaType {}
  }
}
