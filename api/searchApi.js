import { Octokit } from "octokit"
import { tokenTest } from "../src/token";

function makeSearchInQuery() {
  return "/code?q=addClass+in:file&page=2&per_page=50";
}

async  function searchRepository() {
    const octokit = new Octokit({
        auth: tokenTest()
      })
    let qs =   makeSearchInQuery()
     let repository =  await octokit.request(`GET /search${qs}`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'Accept': 'application/vnd.github+json'
        }
      })
      return repository.data;
}
export {searchRepository};