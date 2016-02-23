import koa from "koa";
import router from "./routes";


let app = new koa();

function server(port) {
  app.use(router.routes());
  console.log(`Starting server on ${port}`);
  return app.listen(port);
}

export default server;
