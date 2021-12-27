import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() label: string = '';
  @Input() total : string = '';
  @Input() percentage: string = '';

  @Input() data = []
  Highcharts = Highcharts;
  chartOptions = {}
  
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      tooltip: {
          split: true,
          outside: true
      },
      legend: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      xAxis: {
        lebels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      yAxis: {
        lebels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          data: this.data
      }]
      };
  
      HC_exporting(Highcharts);
  
      setTimeout(()=>{
        window.dispatchEvent(
          new Event('resize')
        );
      },10);
  
  }

}
