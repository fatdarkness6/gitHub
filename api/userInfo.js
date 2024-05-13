 import { Octokit } from "octokit";
import { tokenTest } from "../src/token";

















 

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