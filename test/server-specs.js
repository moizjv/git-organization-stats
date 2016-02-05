// transpile:mocha

import server from '..';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import 'mochawait';
import request from 'request-promise';

chai.should();
chai.use(chaiAsPromised);

describe('git-organization-stats endpoints', () => {
  const baseUrl = 'http://localhost:3040';
  let koaServer;
  before(async () => {
    koaServer = server();
  });
  it('should get user details from organization',async () => {
    let body = await request({url: baseUrl + '/org/appium',});
    body.should.have.length.above(0);
  });

  after(async () => {
    koaServer.close();
  });
});
