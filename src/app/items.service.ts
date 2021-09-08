import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  getItemsBasic(){
    return [
      {
        id: 1,
        title: 'Item 1'
      },
      {
        id: 2,
        title: 'Item 2'
      },
    ];
}

}
