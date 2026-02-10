import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { Footer } from "./components/footer/footer";
import { NavBar } from './components/nav-bar/nav-bar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
  /* changeDetection: ChangeDetectionStrategy.OnPush */
})
export class App {
  protected readonly title = signal('signals');
}
