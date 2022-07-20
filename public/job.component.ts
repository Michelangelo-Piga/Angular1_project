import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { OfferComponent } from '../../components/offer/offer.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {


  data: any;
  offersList: any;
  selectedLevel: string = "all";
  page: number = 1;
  @ViewChild('select') select!: ElementRef; // select element for choose the level 
  // service: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.jobList();
    
  }

  jobList(): void {
    return this.dataService.getJobs(this.page).subscribe((res: any) => {
      this.data = res;
      this.offersList = this.data.results;
      console.log(this.offersList);
    });
  }

  

  levelChange(level_page: number){ 
    this.page = level_page; 
    this.selectedLevel = this.select.nativeElement.value;

    this.dataService.getLevels(this.selectedLevel, level_page).subscribe((res: any) => {

      this.data = res;
      this.offersList = this.data.results;
      
    
    });
    
  }


  NextPage(){ 

    this.page = this.page + 1;
    
    if (this.selectedLevel == "all"){
      this.jobList();
    }else{
      this.levelChange(this.page);
    }
    
  }

  PreviousPage(){

    if(this.page > 1){ 
      this.page = this.page - 1;

      if (this.selectedLevel == "all"){
        this.dataService.getJobs(this.page);
      }else{
        this.levelChange(this.page);
      }
    }

    
  }

}
