import koa_router from "koa-router";
import { getOrgUsers } from "./git-controller";
import { getOrgProjects } from "./git-controller";

let router = new koa_router();

router.get('/', async function (ctx) {
  ctx.body = "FTW";
});

router.get('/org/:org', async function (ctx) {
  ctx.body = await getOrgUsers(ctx.params.org);
});

router.get('/:org/projects', async function (ctx) {
  ctx.body = await getOrgProjects(ctx.params.org);
});

export default router;
