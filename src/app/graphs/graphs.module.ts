import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphDaywiseComponent } from './bar-graph-daywise/bar-graph-daywise.component';
import { BarGraphMonthwiseComponent } from './bar-graph-monthwise/bar-graph-monthwise.component';
import { BarGraphWeekwiseComponent } from './bar-graph-weekwise/bar-graph-weekwise.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarGraphDaywiseComponent, 
    BarGraphMonthwiseComponent, 
    BarGraphWeekwiseComponent, 
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    BarGraphDaywiseComponent, 
    BarGraphMonthwiseComponent, 
    BarGraphWeekwiseComponent,
    LineChartComponent
  ]
})
export class GraphsModule { }
