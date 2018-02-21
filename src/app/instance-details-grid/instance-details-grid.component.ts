import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-instance-details-grid',
  templateUrl: './instance-details-grid.component.html',
  styleUrls: ['./instance-details-grid.component.scss']
})
  
export class InstanceDetailsGridComponent implements OnInit {// Bar Chart
  private apiInstancesDetailResponse: any;
  public apiResponse: InstanceDetails [] = new Array();
  
  constructor(private gdService: GraphDataService) { 
  
  }

  ngOnInit() {
    this.apiResponse = new Array();
    this.getInstanceDetails();
  }

  public getInstanceDetails() {
    this.apiResponse = new Array();
    this.gdService.getInstanceDetails().subscribe(
      res => {
        this.apiInstancesDetailResponse = res;
        let firstElement = this.apiInstancesDetailResponse[ Object.keys(this.apiInstancesDetailResponse)[0] ];
        for (let key in Object.keys(firstElement)) {
          this.apiResponse.push(this.createGraphData({'name': Object.keys(firstElement)[key], 'data': firstElement[Object.keys(firstElement)[key]]}));
        }
        console.log(this.apiResponse);
      } ,
      err => console.error(err), () => console.log(' Done !! Loading Instance Details !! ')
    );
  }
  
  private createGraphData(iDetails: InstanceDetails): { name: string; data:  any[] } {
    let newGData = {'name': '', 'data': []};
    newGData.data = iDetails.data;
    newGData.name = iDetails.name;
    return newGData;
  }
  
  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }
  
   
}

interface InstanceDetails {
    name: string;
    data: any[];
}
