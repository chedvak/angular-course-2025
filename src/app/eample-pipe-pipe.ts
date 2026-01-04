import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eamplePipe'
})
export class EamplePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
