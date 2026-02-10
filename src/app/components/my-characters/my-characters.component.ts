import { Component, computed, OnInit, signal } from '@angular/core';
import { Character } from '../../shared/interfaces/data.interface';
import { CardComponent } from '../../shared/components/card/card.component';


@Component({
  selector: 'app-create-character',
  imports: [CardComponent],
  templateUrl: './my-characters.component.html',
  styleUrl: './my-characters.component.scss',
})
export class MyCharactersComponent {

  public myCharacters = signal<Character[]>([])
  public newCharacter = signal<Character>({} as Character)

  getAllMyCharacters(): void {}

  addNewCharacter() {

    let newCharacterConst: Character = {
      created: 'sdsds',
      episode: [''],
      id: 1,
      gender: 'male',
      location: {name: '', url: ''},
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
      name: 'mario2',
      origin: {name: 'Eath', url: ''},
      species: 'human',
      status: 'Alive',
      type: '',
      url: ''
    }


    this.newCharacter.set(newCharacterConst)
      if(this.myCharacters().length > 0) {
        this.myCharacters.update((currentValue) => [...currentValue, {...newCharacterConst} ])
      }
      else {
        this.myCharacters.set([this.newCharacter()])
      }
  };
}
