import type { APIContext, MiddlewareNext } from "astro";

export async function validation(
  _: APIContext,
  next: MiddlewareNext,
): Promise<Response> {
  console.log("validationリクエスト");
  const response = await next();
  console.log("validationレスポンス");
  return response;
}
