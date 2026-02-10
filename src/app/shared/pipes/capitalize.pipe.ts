import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    // reemplaza guiones por espacios
    const withSpaces = value.replace(/-/g, ' ');

    // pone la primera letra de cada palabra en mayúscula
    return withSpaces.replace(/\b\w/g, char => char.toUpperCase());
  }
}
