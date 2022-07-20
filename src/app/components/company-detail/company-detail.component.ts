import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  offer: any;
  companyData: any;
  constructor(public http: HttpClient, private offerService: OffersService, private dataService: DataService) { }


  ngOnInit(): void {
    this.offerService.currentData.subscribe((e) => { //take the offer data from Current Offer Service
      this.offer = e;
    });

    console.log(this.offer.company.id);
    this.dataService.getCompanies(this.offer.company.id).subscribe(res => {

      this.companyData = res;
      console.log(this.companyData);

    });

  }
}
