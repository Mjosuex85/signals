import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {

  videoUrl!: SafeResourceUrl;

  @Input() url: string = '';

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/ySRl_sftlcs'
      
    );
  }

}
