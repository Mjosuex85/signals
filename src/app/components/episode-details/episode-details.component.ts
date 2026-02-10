import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesService } from '../../services/episodes.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { EMPTY, forkJoin, map, of } from 'rxjs';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { MatCardModule } from "@angular/material/card";
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { VideoComponent } from "../../shared/components/video/video.component";
import { SeasonEpisodePipe } from '../../shared/pipes/parseEpisode.pipe';

@Component({
  selector: 'app-episode-details',
  imports: [LoaderComponent, MatCardModule, MatButton /* MatIcon */, VideoComponent, SeasonEpisodePipe],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.scss',
})
export class EpisodeDetailsComponent {

  private route = inject(ActivatedRoute)
  private router = inject(Router)
  private episodesService = inject(EpisodesService)
  private characterService = inject(CharacterService)
  
  lastValidEpisodeId = signal(0)

  characters = computed(() => this.charactersResource?.value())
  episodes = computed(() => this.episodeResource.value())

  episodeId = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id') ?? '0')),
    {initialValue: '0'}
  );
  
  episodeResource = rxResource({
    params: () =>  this.episodeId() ,
    stream: ({ params: id }) => {
      if (id === null) return EMPTY
      return this.episodesService.getEpisodeByid(id)
    }
  })

  charactersResource = rxResource({
    params: () => this.episodeResource.value()?.characters ?? [],
    stream: ({ params: characterUrls }) => {

      if (!characterUrls?.length) return of([]);

      const characterIds = characterUrls.map(url => Number(url.split('/').pop()));
    
      const observables = characterIds.map(id =>
      this.characterService.getCharacterById(id.toString())
      );

      return forkJoin(observables);
    }
  });

  goToCharacterDetails(id: number | undefined) {
    if(id === undefined) return
    this.router.navigate(['/characters', id])
  }

  nextEpisode(direction: string) {
    
    const id = parseInt(this.episodeId())
    
    if(direction === 'next') {
      this.router.navigate(['/episodes', id + 1])
    }
    else {
      this.router.navigate(['/episodes', id - 1])
    }
  }

}
