import { Component } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { LoanSummaryComponent } from '../loan-summary/loan-summary.component';
import { LoanGraphComponent } from '../loan-graph/loan-graph.component';

@Component({
  selector: 'app-loan-amortization',
  standalone: true,
  imports: [UserInfoComponent, LoanSummaryComponent, LoanGraphComponent],
  templateUrl: './loan-amortization.component.html',
  styleUrl: './loan-amortization.component.scss',
})
export class LoanAmortizationComponent {}
