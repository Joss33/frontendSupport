import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSupport',
})
export class FilterSupportPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) {
      return value;
    }
    const resultClient = [];
    for (const soporte of value) {
      for (let i = 0; i <= soporte.clients.length; i++) {
        if (soporte.clients[i]) {
          const selectedCustomer = i;
          if (
            // tslint:disable-next-line: no-string-literal
            soporte.clients[selectedCustomer]['name']
              .toLowerCase()
              .indexOf(arg.toLowerCase()) > -1
          ) {
            resultClient.push(soporte);
          }
        }
      }
    }
    return resultClient;
  }
}
