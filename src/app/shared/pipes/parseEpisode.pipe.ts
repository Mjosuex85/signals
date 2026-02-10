import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonEpisode'
})
export class SeasonEpisodePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // Match SxxExx
    const match = value.match(/S(\d+)E(\d+)/i);
    if (!match) return value;

    const season = match[1].padStart(2, '0'); // asegura dos dígitos
    const episode = match[2].padStart(2, '0');

    return `Season ${season} - Episode ${episode}`;
  }

}
