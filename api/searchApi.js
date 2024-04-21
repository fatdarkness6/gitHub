import { Octokit } from "octokit"
import { tokenTest } from "../src/token";



async  function searchRepository(searchParamsType , searchParams) {
    const octokit = new Octokit({
        auth: "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"
      })
     let repository =  await octokit.request(`GET /search/${searchParamsType}?q=${searchParams}&page=1&`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'Accept': 'application/vnd.github+json'
        }
      })
      return repository.data;
}
export {searchRepository};