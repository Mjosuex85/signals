import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseEpisode'
})
export class ParseEpisodePipe implements PipeTransform {

  transform(value: string): { season: number, episode: number } | null {
    if (!value) return null;

    // Regex para capturar SxxExx
    const match = value.match(/S(\d+)E(\d+)/i);
    if (!match) return null;

    const season = parseInt(match[1], 10);
    const episode = parseInt(match[2], 10);

    return { season, episode };
  }

}