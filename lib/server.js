import koa from "koa";
import router from "./routes";


let app = new koa();

function server(port) {
  app.use(router.routes());
  return app.listen(port);
}

export default server;
