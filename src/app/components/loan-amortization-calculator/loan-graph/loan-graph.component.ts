import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-loan-graph',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './loan-graph.component.html',
  styleUrl: './loan-graph.component.scss',
})
export class LoanGraphComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  public createChart() {
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio: 1.3
      }
      
    });
  }
}
