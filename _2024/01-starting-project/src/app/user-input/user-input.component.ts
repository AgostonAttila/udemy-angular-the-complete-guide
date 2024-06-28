import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  //@Output() calculate = new EventEmitter<InvestmentInput>();
  //calculate = output<InvestmentInput>();

  //enteredInitialInvestment = '0';
  //enteredAnnualInvestment = '0';
  //enteredExpectedReturn = '5';
  //duration = '10';

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    /* this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });*/

    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });

    this.enteredInitialInvestment.set('0');
    this.duration.set('10');
    this.enteredExpectedReturn.set('5');
    this.enteredAnnualInvestment.set('0');
  }
}
