import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GraphDataService } from './graph-data.service';
import { GraphInstancesCountComponent } from './graph-instances-count/graph-instances-count.component';
import { GraphInstancesStateComponent } from './graph-instances-state/graph-instances-state.component';
import { GraphTypeInstancesCountComponent } from './graph-type-instances-count/graph-type-instances-count.component';
import { InstanceDetailsGridComponent } from './instance-details-grid/instance-details-grid.component';
import { AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphInstancesCountComponent,
    GraphInstancesStateComponent,
    GraphTypeInstancesCountComponent,
    InstanceDetailsGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    ChartsModule,
    HttpClientXsrfModule.withOptions({
     cookieName: 'My-Xsrf-Cookie',
     headerName: 'My-Xsrf-Header',
    })
  ],
  providers: [GraphDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
