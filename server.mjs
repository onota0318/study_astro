import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

// TODO: port は適当
const PORT = process.env.SECRET_SERVER_PORT || 8080;

const app = express();

// NOTE: 例外墓場
// ここで process 終了を止めるのではなく、適切に FATAL 吐いて Ops に速やかに通知する
// @see https://expressjs.com/ja/advanced/best-practice-performance.html

process.on("uncaughtException", (err, origin) => {
  console.error(err);
  console.error(origin);
});

const base = "/";
app.use(base, express.static("dist/client/"));
app.use(ssrHandler);

console.log(process.env.SECRET_PASSWORD);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
