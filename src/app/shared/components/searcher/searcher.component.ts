import { Component, computed, effect, Inject, inject, Input, input, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class CharactersSearchComponent {

  /* Dependencies Injection */
  router = inject(Router)

  /* Wrapper */
  searchCriteria = signal('')

  label = input<string>('')
  place_holder = input<string>('')
  criteria = input<WritableSignal<string>>()


  search() {
    this.router.navigate([], {
      queryParams: { name: this.searchCriteria()}
    })
  }
  
}
