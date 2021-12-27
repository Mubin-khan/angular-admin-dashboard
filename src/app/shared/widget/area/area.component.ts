import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {}
  @Input() data = []
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    exporting: {
      enabled: true
    },
    credits: {
      enabled: false
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
    series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    },300);

  }

}
