import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoanAmortizationComponent } from 'src/app/components/loan-amortization/loan-amortization.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

export enum Calculator {
  LoanAmortization = 'Loan Amortization Calculator'
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, LoanAmortizationComponent, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  public calculatorType: Calculator = Calculator.LoanAmortization;
  public Calculator = Calculator;
}
