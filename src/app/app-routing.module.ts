import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobComponent } from './components/job/job.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';


const routes: Routes = [
  {path: '', component: JobComponent},
  {path: 'more-info', component: JobDetailComponent},
  {path: 'company-info', component: CompanyDetailComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
