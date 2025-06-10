import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraPalabra'
})
export class PrimeraPalabraPipe implements PipeTransform {

  transform(value: string): string{
    if (!value) return '';
    return value.split(' ')[0];
  }
}


