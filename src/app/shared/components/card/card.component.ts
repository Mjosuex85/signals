import { Component, inject, Input } from '@angular/core';
import { Character } from '../../interfaces/data.interface';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-card',
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent {

  @Input() character: Character = {} as Character;

  router = inject(Router)



  clickin(character: Character) {
    this.router.navigate(['/characters', character.id])
  }
}
