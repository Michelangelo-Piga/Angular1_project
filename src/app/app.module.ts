import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { JobComponent } from './components/job/job.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfferComponent } from './components/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    JobDetailComponent,
    JobComponent,
    HeaderComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
