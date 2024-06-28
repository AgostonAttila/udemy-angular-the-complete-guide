import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-invest-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invest-results.component.html',
  styleUrl: './invest-results.component.css',
})
export class InvestResultsComponent {
  /* results = input<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[]
  >();

  
  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];


    get results() {
    return this.invService.resultsData;
  }
  */

  private invService = inject(InvestmentService);

  results = computed(() => this.invService.resultData());
}
