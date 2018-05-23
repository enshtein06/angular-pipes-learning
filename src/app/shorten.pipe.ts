import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shorten'})
export class ShortenPipe implements PipeTransform {
	transform(value: any, limit) {
		if(value.length > limit) {
			return value.substring(0, limit) + ' ...';
		}
		 return value;
	}
}