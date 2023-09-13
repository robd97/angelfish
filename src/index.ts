import { Elysia } from "elysia";
import { PORT } from "./settings";
import authRoutes from "./resources/auth";

const app = new Elysia().use(authRoutes).listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
