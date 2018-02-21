import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-graph-instances-state',
  templateUrl: './graph-instances-state.component.html',
  styleUrls: ['./graph-instances-state.component.scss']
})
export class GraphInstancesStateComponent implements OnInit {

  // Pie Chart
  public apiStateCountResponse: any;
  public barChartLabels: string[] = new Array();
  public barChartData: GraphData[] = new Array();
  public barChartType = 'bar';
  
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public chartLegend = true;
  

  constructor(private gdService: GraphDataService) { 
    this.barChartLabels = new Array();
    this.barChartData = new Array();
  }

  ngOnInit() {
    this.getGrpahData();
  }

  public getGrpahData() {
    this.barChartLabels = new Array();
    this.barChartData = new Array();
    this.gdService.getInstanceStateData().subscribe(
      res => {
        this.apiStateCountResponse = res;
        this.assignToModel();
      } ,
      err => console.error(err), () => console.log(' Done !! Loading Bar Graph !! ')
    );
  }
  
  public assignToModel(): void {

    this.barChartLabels = this.apiStateCountResponse.map(function(e) {
     return  e[environment.stateLabelProperty]; // e['envname'];
    });

    this.mapToGraphData();
    console.log('barChartLabels :: ' + this.barChartLabels);
    console.log('barChartData :: ' + this.barChartData);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
 
  public chartHovered(e: any): void {
    console.log(e);
  }
 
  public randomize(): void {
     this.getGrpahData();
  }
  
  private createGraphData(gData: GraphData): { data:  number[]; label: string } {
    let newGData = {'data': [], 'label': ''};
    newGData.data = gData.data;
    newGData.label = gData.label;
    return newGData;
  }
  
  private parseResponse(key: string) {
    let data = [];

    data = this.apiStateCountResponse.map(function(e) {
       return e[key];
    });

    this.barChartData.push(this.createGraphData({'data': data, 'label': key}));
  }
  
  private mapToGraphData() {
   let apiProperties = environment.stateDataPropertyNames.split(',');
    
    for (let index in apiProperties) {
      this.parseResponse(apiProperties[index]);
    }
  }

}

 interface GraphData {
    data: number[];
    label: string;
 }
