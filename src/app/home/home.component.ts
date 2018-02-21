import { Component, OnInit } from '@angular/core';
import { GraphDataService } from '../graph-data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
export class HomeComponent implements OnInit {

  constructor(private gdService: GraphDataService) { 
  }

  ngOnInit() {
  }
  
  public randomize(): void {
    // TODO: refresh
  }
  
}
