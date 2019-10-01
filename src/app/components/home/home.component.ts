import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';
import { List } from 'src/app/models/list';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  list:List[] = []; /* Creating new array of objects to store the data coming from GET request */

  text:string='';
  togIndex:number;


  /* Injecting Service */
  constructor(private listService:ListService) { }

  ngOnInit() {
    this.listService.get().subscribe(response =>{
      this.list = response as List[];
      
    })
  }



  add() {

    /* Creating new object to pass it to POST function */
    let newItem = new List();
    newItem.name = this.text;
    newItem.id = Math.random();

    this.listService.addItem(newItem).subscribe(response=>{

      let id:number=response as number;
      newItem.id = id;

      this.list.unshift(newItem); /* Adding this new object to the array */
      console.log(newItem);
      
    })
  }


  delete(item:List,index:number)
  {  
    this.listService.deleteItem(item).subscribe(res=>{
      this.list.splice(index,1);  /* deleting item from the array by its index */
      
    }, error=>{alert("try again")});
  }




  edit(i:number){
    this.togIndex = i;
  }


  update(item:List, name:string){
    this.togIndex = undefined;
    this.listService.updateItem(item).subscribe(res=>{
      this.list.map(obj=>{
        if(obj.id == item.id) {obj.name = name}
      });

      console.log(res);
    })
  }

}
