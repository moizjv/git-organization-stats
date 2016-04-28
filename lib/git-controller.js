import request from 'request-promise';


async function getOrgUsers(org) {
  let options = {
    method: 'GET',
    url: `https://api.github.com/orgs/${org}/members`,
    headers: {'user-agent': 'node.js'}
  };
  return await request(options);
}


async function getOrgProjects(org) {
  let options = {
    method: 'GET',
    url: `https://api.github.com/orgs/${org}/repos`,
    headers: {'user-agent': 'node.js'}
  };
  return await request(options);
}

async function getProjectUsers(owner, repo) {
  let options = {
    method: 'GET',
    url: `https://api.github.com/repos/${owner}/${repo}/contributors`,
    headers: {'user-agent': 'node.js'}
  };
  return await request(options);
}

export { getOrgUsers, getOrgProjects, getProjectUsers };
