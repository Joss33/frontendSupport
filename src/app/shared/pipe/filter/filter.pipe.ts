import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) {
      return value;
    }
    const resultClient = [];
    for (const client of value) {
      if (client.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultClient.push(client);
      }
    }
    return resultClient;
  }
}
