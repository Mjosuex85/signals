import { Component, inject, signal } from '@angular/core';
import { Router } from "@angular/router";
import { routes } from '../../app.routes';
import { parsePathName } from '../../shared/pipes/parsers'; 
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { CharactersSearchComponent } from '../../shared/components/searcher/searcher.component';

@Component({
  selector: 'app-nav-bar',
  imports: [CapitalizePipe],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss',
})
export class NavBar {

  profile = 'Mario Vidal';

  router = inject(Router)
  currentLink = signal<string>('characters')
  
  rutas = signal([
    'characters',
    'episodes',
    'locations',
    'about',
    'create-your-character'
  ])



  navigate(route: string) {
    this.currentLink.set(route)
    this.router.navigate([route])
  }

  

}
