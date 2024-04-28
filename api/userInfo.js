 import { Octokit } from "octokit";
import { tokenTest } from "../src/token";













 export let token = "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"





 

 async function api(username) {
    
    const octokit = new Octokit({
        auth: "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"
      })
      
     let response =  await octokit.request('GET /users/{username}', {
        username: username,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
  return response.data;
}
export {api};