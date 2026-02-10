import { Component, computed, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { EMPTY, forkJoin, map, tap } from 'rxjs';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { DatePipe } from '@angular/common';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-character-details',
  imports: [LoaderComponent, DatePipe],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent {

  router = inject(ActivatedRoute)
  route = inject(Router)
  characterService = inject(CharacterService)
  episodesService = inject(EpisodesService)

  character = computed(() => this.characterResources.value())
  episodes = computed(() => this.episodeResources.value())

  characterId = toSignal(
    this.router.paramMap.pipe(
      map(params => params.get('id')) 
    ),
    {initialValue: ''}
  )
  
  characterResources = rxResource({
    params: () => this.characterId(),
    stream: ({params: id}) => {
      if (id === null) return EMPTY;
      return this.characterService.getCharacterById(id)
    }
  })

  episodeResources = rxResource({
    params: () => this.characterResources.value()?.episode ?? [],
    stream: ({ params: espidoesURl }) => {

    const characterIds = espidoesURl.map(url => Number(url.split('/').pop()));
    const observables = characterIds.map((id) => {
        return this.episodesService.getEpisodeByid(id.toString())
      })

      return forkJoin(observables)
  }

  })

  goToEpisode(id: number) {
    this.route.navigate(['episodes/', id])
  }

}
