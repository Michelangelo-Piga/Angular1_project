import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable( {
    providedIn: 'root'
})

export class DataService{



    constructor(public http: HttpClient){}

    getJobs(page : number): any{
        return this.http.get('https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=' + page);
    }

    getCompanies(id: string){
      return this.http.get('https://www.themuse.com/api/public/companies/' + id);
  }

    getLevels(level: string, page:number): any{
      return this.http.get('https://www.themuse.com/api/public/jobs?category=Software%20Engineering&level=' + level + '&page=' + page);
    }
}