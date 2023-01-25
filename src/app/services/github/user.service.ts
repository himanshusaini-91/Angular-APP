import { Injectable } from '@angular/core';
import { Octokit } from "octokit";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

    
  }
  async getUsers(searchValue: string) {
    const octokit = new Octokit({
      auth: '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'
    })
    const data = await octokit.request(`GET /search/users`, {q:searchValue})
    return  data
  }
}
