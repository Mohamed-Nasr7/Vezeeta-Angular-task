import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class ListService {


  url:string = `https://jsonplaceholder.typicode.com/users`;
  itemsUrl:string = `https://jsonplaceholder.typicode.com/photos`;

  constructor(private http: HttpClient) { }


  /* CRUD functions for Home page content */

  get(){
    return this.http.get(this.url)
  }


  addItem(item){
    return this.http.post(`${this.url}`,item);
  }

  deleteItem(item){
    return this.http.delete(`${this.url}/${item.id}`);
  }

  updateItem(item){
    return this.http.put(`${this.url}/${item.id}`, item);
  }


  /* Items page */

  getItems(){
    return this.http.get(this.itemsUrl)
  }

}
