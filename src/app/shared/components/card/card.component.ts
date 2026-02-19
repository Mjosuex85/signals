import { Component, effect, inject, input } from '@angular/core';
import { CharacterPreview, ID, MyReadonly } from '../../interfaces/data-interfaces/characters.interface';
import { Router } from '@angular/router';
import { MaterialModule } from '../../material/material.module';

interface Punto2D {
    x: number;
    y: number;
}

@Component({
  selector: 'app-card',
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})


export class CardComponent {

  router = inject( Router )

  character = input.required<CharacterPreview>()





  clickiIn(id: ID): void {
    this.router.navigate(['/characters', id])
  }
}
