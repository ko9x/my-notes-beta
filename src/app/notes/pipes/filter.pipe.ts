import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value, args: any[]): any {
    if(!value) {
      return value
    }

    if (value.length === 1) {
      let list = []
      value.forEach(note => {
        list.push(note.section)
      })
      return list;
    }

    let list = [];
    value.forEach(note => {
        if(list.indexOf(note.section) == -1) {
          list.push(note.section)
        }
    });
    return list;
  }
} 
