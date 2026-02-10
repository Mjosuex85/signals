import { Component, Input, signal, WritableSignal, inject, input } from '@angular/core';
import { Criteria } from '../../interfaces/common.interfaces';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  imports: [MatRadioModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  
  @Input() criteria!: WritableSignal<Criteria>;
  @Input() filterValues: any = ''

  currentCriteria = input.required<Criteria>();

  private router = inject(Router);

  values = [
    {label: 'Status', values: ['Alive', 'Dead'] },
    {label: 'Species', values: ['Alien', 'Human', 'Android', 'Robot']},
    {label: 'Location', values: ['Eath', 'Dream']},
    {label: 'Gender', values: ['Male', 'Female']}
  ]

  filters = signal<Criteria>({})


  applyFilter(key: keyof Criteria, value: string) {
    this.router.navigate([], {
      queryParams: { [key]: value, page: '1' }, // Reset a pág 1 al filtrar
      queryParamsHandling: 'merge'
    });
  }


  setFilterCriteria(value: string, criteria: Criteria) {
    const crit = Object.keys(criteria)[0] as keyof(Criteria)
    criteria[crit] = value

    this.filters.update((curentValue) => {
      return {
        ...curentValue,
        ...criteria
      }
    })
  }
  
  Apllyfilter(): void {
    this.router.navigate([], {
      queryParams: {
        ...this.filters()
      } ,
      queryParamsHandling: 'merge',
    });
  }
}
