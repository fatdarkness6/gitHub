import { Octokit } from "octokit"
import { tokenTest } from "../src/token";



async  function searchRepository(searchParamsType , searchParams , searchPages) {
    const octokit = new Octokit({
      auth: "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"
      })
     let repository =  await octokit.request(`GET /search/${searchParamsType}?q=${searchParams}&page=${searchPages}&per_page=10`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'Accept': 'application/vnd.github+json'
        }
      })
      return repository.data;
}
export {searchRepository};