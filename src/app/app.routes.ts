import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MyCharactersComponent } from './components/my-characters/my-characters.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';



export const routes: Routes = [
    { path: 'characters', loadComponent: () => import('./components/charachters/charachters.component').then(m => m.CharachtersComponent) },
    { path: 'episodes', loadComponent: () => import('./components/episodes/episodes.component').then(m => m.EpisodesComponent)},
    { path: 'locations', loadComponent: () => import('./components/locations/locations.component').then(m => m.LocationsComponent)},
    { path: 'characters/:id', component: CharacterDetailsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'episodes/:id', component: EpisodeDetailsComponent },
    { path: 'create-your-character', component: MyCharactersComponent }
];