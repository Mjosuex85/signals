import { Component, computed, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EpisodesService } from '../../services/episodes.service';
import { PaginationComponent } from "../../shared/components/pagination/pagination.component";
import { Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { CharactersSearchComponent } from "../../shared/components/searcher/searcher.component";
import { SeasonEpisodePipe } from '../../shared/pipes/parseEpisode.pipe';
import { Criteria } from '../../shared/interfaces/common.interfaces';

@Component({
  selector: 'app-episodes',
  imports: [PaginationComponent, DatePipe, LoaderComponent, CharactersSearchComponent, SeasonEpisodePipe],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss',
})
export class EpisodesComponent  {

  private episodeService = inject(EpisodesService)
  private router = inject(Router)

  /* Url Inputs */
  page = input<string>('1');
  name = input<string>('')

  criteria = computed<Criteria>(() => ({
    page: this.page() || '1',
    name: this.name() || ''
  }))

  currentPage = computed(() => this.page() || '1')

  episodesResource = rxResource({
    params: () => ({criteria: this.criteria()}),
    stream: ({params}) => (this.episodeService.getEpisodes(params.criteria))
  })

  episodes = computed(() => this.episodesResource.value()?.results ?? [])
  pagination = computed(() => this.episodesResource.value()?.info ?? {})

  getEpisodeDetails(id: string) {
     this.router.navigate(['/episodes', id])
  }
  
}