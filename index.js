//require(koa)
import server from './lib/server';

function main () {
  return server(3040);
}

if (require.main === module) {
  main();
}

export default main;
