import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === undefined || value.length === 0) return value;

		return value.filter((o) => {
			return o.title.toLowerCase().includes(args.toLowerCase()) ||
						 o.body.toLowerCase().includes(args.toLowerCase())
		});
  }
}
