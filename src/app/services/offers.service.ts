import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private dataSource = new BehaviorSubject({});
  currentData = this.dataSource.asObservable();

  constructor() { }

  updateData(data: string){ //For modify dataSource
    this.dataSource.next(data);
    console.log("service");
    console.log(data);
    
  }

  
}