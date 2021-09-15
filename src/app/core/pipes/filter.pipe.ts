import { Pipe, PipeTransform } from '@angular/core';
import { Users } from 'src/app/feature/components/users/models/users.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Users[], arg: string): Users[] {
    if(!value || !arg){
      return;
    }
    const resultSearch = [];
    for(const user of value){
      if(user.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1){
        resultSearch.push(user);
      };
    };
    return resultSearch;
  }

}
