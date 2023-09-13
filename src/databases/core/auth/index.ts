import { lucia } from "lucia";
import { libsql } from "@lucia-auth/adapter-sqlite";
import { CoreDBClient } from "..";
import { ENVIRONMENT } from "../../../settings";

export const auth = lucia({
  adapter: libsql(CoreDBClient, {
    user: "user",
    session: "user_session",
    key: "user_key",
  }),
  env: ENVIRONMENT,
});
