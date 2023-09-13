import Elysia, { t } from "elysia";

const SignUpSchema = t.Object(
  {
    email: t.String({
      default: "example@example.com",
      format: "email",
    }),
    password: t.String({
      default: "SuperSecretPassword123!",
      pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
    }),
  },
  {
    required: ["email", "password"],
  }
);

export default new Elysia()
  .post(
    "/signup",
    ({ body: { email, password } }) => {
      return {
        message: `Welcome, ${email}!`,
      };
    },
    {
      body: SignUpSchema,
    }
  )
  .post("/login", () => {}, { body: SignUpSchema });
