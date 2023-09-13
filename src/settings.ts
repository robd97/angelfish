import { Env } from "lucia";

const { env } = Bun;

const getEnvSetting = (name: string): string => {
  const value = env[name];
  if (value === undefined) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value as string;
};

export const DATABASE_URL = getEnvSetting("DATABASE_URL");
export const DATABASE_AUTH_TOKEN = getEnvSetting("DATABASE_AUTH_TOKEN");
export const ENVIRONMENT = getEnvSetting("ENVIRONMENT") as Env;
