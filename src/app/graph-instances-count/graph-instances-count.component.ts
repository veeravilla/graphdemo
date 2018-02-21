import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-graph-instances-count',
  templateUrl: './graph-instances-count.component.html',
  styleUrls: ['./graph-instances-count.component.scss']
})
  
export class GraphInstancesCountComponent implements OnInit {

  // Pie Chart
  public apiEnvCountResponse: any;
  public pieChartLabels: string[] = new Array();
  public pieChartData: GraphData[] = new Array();
  public pieChartType = 'pie';
  
  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public chartType = 'bar';
  public chartLegend = true;
  

  constructor(private gdService: GraphDataService) { 
    this.pieChartLabels = new Array();
    this.pieChartData = new Array();
  }

  ngOnInit() {
    this.getGrpahData();
  }

  public getGrpahData() {
    this.pieChartLabels = new Array();
    this.pieChartData = new Array();
    this.gdService.getEnvInstanceCount().subscribe(
      res => {
        this.apiEnvCountResponse = res;
        this.assignToModel();
      } ,
      err => console.error(err), () => console.log(' Done !! Loading Pie Graph !! ')
    );
  }
  
  public assignToModel(): void {

    this.pieChartLabels = this.apiEnvCountResponse.map(function(e) {
     return  e[environment.countLabelPropertyName]; // e['envname'];
    });

    this.mapToGraphData();
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

    data = this.apiEnvCountResponse.map(function(e) {
       return e[key];
    });

    this.pieChartData.push(this.createGraphData({'data': data, 'label': key}));
  }
  
  private mapToGraphData() {
   let apiProperties = environment.countDataPropertyNames.split(',');
    
    for (let index in apiProperties) {
      this.parseResponse(apiProperties[index]);
    }
  }

}

 interface GraphData {
    data: number[];
    label: string;
 }
