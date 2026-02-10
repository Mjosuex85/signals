import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { Location } from '../../shared/interfaces/data.interface';
import { Pagination } from '../../shared/interfaces/Pagination.interface';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../shared/interfaces/data.interface';
import { DatePipe } from '@angular/common';
import { PaginationComponent } from "../../shared/components/pagination/pagination.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { Criteria } from '../../shared/interfaces/common.interfaces';
import { CharactersSearchComponent } from "../../shared/components/searcher/searcher.component";

@Component({
  selector: 'app-locations',
  imports: [DatePipe, PaginationComponent, LoaderComponent, CharactersSearchComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent {

  private locationsService = inject(LocationsService)

  /* Url Input */
  page = input<string>('1');
  name = input<string>('')
  type = input<string>('')
  dimension = input<string>('')

  criteria = computed<Criteria>(() => ({
    page: this.page(),
    name: this.name(),
    type: this.type(),
    dimension: this.dimension()
  }))

  currentPage = computed(() => this.page() || '1')

  locationsResource = rxResource({
    params: () => ({criteria: this.criteria()}),
    stream: ({params}) => (this.locationsService.getAllLocations(params.criteria))
  })

  locations = computed(() => this.locationsResource.value()?.results ?? [])
  pagination = computed(() => this.locationsResource.value()?.info ?? {})

}