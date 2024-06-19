import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  readonly form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      apy: [14],
      loanTerm: [5],
      paymentsPerYear: [12],
      loanAmount: [16000],
      extraPayment: [530],
    });
  }

  public ngOnInit(): void {
    for (const key of Object.keys(this.form.controls)) {
      const control = this.form.controls[key];
      control.valueChanges.subscribe(() => this.calculate());
    }
  }

  public calculate(): void {
    console.log(this.form.controls['apy'].value);
  }
}
