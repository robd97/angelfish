import { Elysia } from "elysia";
import { auth } from "./databases/core/auth";

const app = new Elysia()
  .get("/", async () => {
    const user = await auth
      .createUser({
        key: {
          providerId: "username", // auth method
          providerUserId: "username", // unique id when using "username" auth method
          password: "test", // hashed by Lucia
        },
        attributes: {},
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
    // console.log(user);
    return { keys: user, attributes: user.attributes };
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
