import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashService : DashboardService) { }

  bigChart:any  = []
  cardChart:any = []
  pieChart:any = []
  ngOnInit(): void {
    this.bigChart = this.dashService.getBigChart();
    this.cardChart = this.dashService.getCartChart();
    this.pieChart = this.dashService.getPieChart();
  }

}
