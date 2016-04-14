import koa_router from "koa-router";
import * as gitController from "./git-controller";

let router = new koa_router();

router.get('/', async function (ctx) {
  ctx.body = "FTW";
});

router.get('/org/:org', async function (ctx) {
  ctx.body = await gitController.getOrgUsers(ctx.params.org);
});

router.get('/:org/projects', async function (ctx) {
  ctx.body = await gitController.getOrgProjects(ctx.params.org);
});

export default router;
