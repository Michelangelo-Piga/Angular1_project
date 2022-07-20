import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  offer: any;

  constructor(private offerService: OffersService) { }

  
  ngOnInit(): void {

    this.offerService.currentData.subscribe((e) => { //take the offer data from Current Offer Service
      this.offer = e;
    })
  }

}
