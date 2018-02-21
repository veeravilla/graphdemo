import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-graph-type-instances-count',
  templateUrl: './graph-type-instances-count.component.html',
  styleUrls: ['./graph-type-instances-count.component.scss']
})
  
export class GraphTypeInstancesCountComponent implements OnInit {// Bar Chart
  public apiTypeInstancesCount: any;
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
    this.gdService.getInstanceTypeCount().subscribe(
      res => {
        this.apiTypeInstancesCount = res;
        this.assignToModel();
      } ,
      err => console.error(err), () => console.log(' Done !! Loading Type Instance Count !! ')
    );
  }
  
  public assignToModel(): void {

    this.barChartLabels = this.apiTypeInstancesCount.map(function(e) {
     return  e[environment.typeCountLabelProperty]; // e['envname'];
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

    data = this.apiTypeInstancesCount.map(function(e) {
       return e[key];
    });

    this.barChartData.push(this.createGraphData({'data': data, 'label': key}));
  }
  
  private mapToGraphData() {
   let apiProperties = environment.typeCountAPIPropertyNames.split(',');
    
    for (let index in apiProperties) {
      this.parseResponse(apiProperties[index]);
    }
  }

}

 interface GraphData {
    data: number[];
    label: string;
 }
