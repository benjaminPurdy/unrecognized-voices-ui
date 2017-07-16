import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { RepresentativesComponent } from './representatives/representatives.component';
import { BillsComponent } from './bills/bills.component';
import { BillGovernorComponent } from './bills/bill-governor/bill-governor.component';
import { BillLocationComponent } from './bills/bill-location/bill-location.component';
import { BillHouseComponent } from './bills/bill-house/bill-house.component';
import { RepHouseComponent } from './representatives/rep-house/rep-house.component';
import { RepLocationComponent } from './representatives/rep-location/rep-location.component';
import { RepGovernorComponent } from './representatives/rep-governor/rep-governor.component';
import { RepsApiService } from './services/reps-api.service';
import { BillsApiService } from './services/bills-api.service';
import { UsersApiService } from './services/users-api.service';
import { SharedService } from './services/shared.service';
import { AuthenticateComponent } from './authenticate/authenticate.component';


const APP_ROUTERS: Routes = [
	{ path: 'authenticate', component: AuthenticateComponent},

//	{ path: 'bills', redirectTo: '/bills/all'},
	{ path: 'bills/:section', component: BillsComponent },

//	{ path: 'representatives', redirectTo: '/representatives/all'},
	{ path: 'representatives/:section', component: RepresentativesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    RepresentativesComponent,
    BillsComponent,
    BillGovernorComponent,
    BillLocationComponent,
    BillHouseComponent,
    RepHouseComponent,
    RepLocationComponent,
    RepGovernorComponent,
    AuthenticateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTERS, {enableTracing: true}),
  ],
  providers: [RepsApiService, BillsApiService, UsersApiService, SharedService],
  bootstrap: [AppComponent]
})

export class AppModule { }
