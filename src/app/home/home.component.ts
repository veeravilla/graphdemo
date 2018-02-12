import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
export class HomeComponent implements OnInit {

  public res: any;
  public gLabels: string[] = new Array();
  public gData: GraphData[] = new Array();

  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public chartType = 'bar';
  public chartLegend = true;
  

  constructor(private gdService: GraphDataService) { 
    this.gLabels = new Array();
    this.gData = new Array();
  }

  ngOnInit() {
    this.getGrpahData();
  }

  public getGrpahData() {
    this.gLabels = new Array();
    this.gData = new Array();
    this.gdService.getData().subscribe(
      res => {
        this.res = res;
        this.assignToModel();
      } ,
      err => console.error(err), () => console.log(' Done !! Loading Graph Data !! ')
    );
  }
  
  public assignToModel(): void {

    this.gLabels = this.res.map(function(e) {
     return  e[environment.gLabelPropertyName]; // e['envname'];
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

    data = this.res.map(function(e) {
       return e[key];
    });

    this.gData.push(this.createGraphData({'data': data, 'label': key}));
  }
  
  private mapToGraphData() {
   let apiProperties = environment.gDataPropertyNames.split(',');
    
    for (let index in apiProperties) {
      this.parseResponse(apiProperties[index]);
    }
  }

}

 interface GraphData {
    data: number[];
    label: string;
 }
