import { Component, computed, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop'
import { CharacterService } from '../../services/character.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { CharactersSearchComponent } from "../../shared/components/searcher/searcher.component";
import { Criteria } from '../../shared/interfaces/common.interfaces';
import { FiltersComponent } from "../../shared/components/filters/filters.component";

@Component({
  selector: 'app-charachters',
  imports: [
    CardComponent,
    PaginationComponent,
    LoaderComponent,
    CharactersSearchComponent,
    FiltersComponent
],
  templateUrl: './charachters.component.html',
  styleUrl: './charachters.component.scss',
})

export class CharachtersComponent {

  characterService = inject(CharacterService)
  /* 
    Url inputs.
    It came from the URL with withComponentInputBinding() 
  */
  page = input<string>('1');
  name = input<string>();
  status = input<string>();
  species = input<string>();
  gender = input<string>();


  criteria = computed<Criteria>(() => ({
    page: this.page() || '1',
    name: this.name(),
    status: this.status(),
    species: this.species(),
    gender: this.gender()
  }));

  currentPage = computed(() => this.page() || '1')
  
  charactersResource = rxResource({
    params: () => ({ criteria: this.criteria() }),
    stream: ({ params }) => this.characterService.getAllCharacters(params.criteria)
  })

  characters = computed(() => {return this.charactersResource.value()?.results})
  pagination = computed(() => {return this.charactersResource.value()?.info ?? {}} )

}