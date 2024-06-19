import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-loan-summary',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './loan-summary.component.html',
  styleUrl: './loan-summary.component.scss'
})
export class LoanSummaryComponent {
  @Input() scheduledPayment = 370.14;
  @Input() scheduledNumberOfPayments = 60;
  @Input() actualNumberOfPayments = 24;
  @Input() totalExtraPayments = 9630.62;
  @Input() totalInterest = 2613.95;
}
