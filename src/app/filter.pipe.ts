import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false// This means that filter will be recalculated by any changing in a page
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0) {
    	return value;
    }
	const resultArray = [];
    for(const item of value ) {
    	if(item[propName] === filterString) {
    		resultArray.push(item);
    	}
    }
	return resultArray;
  }

}
