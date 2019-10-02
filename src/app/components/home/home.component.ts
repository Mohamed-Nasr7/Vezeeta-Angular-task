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

  text:any;
  itemIndex:number;


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

      this.list.unshift(newItem); /* Adding this new object to the array */
      console.log(typeof(newItem.name));
      
    })
  }


  delete(item:List,index:number)
  {  
    this.listService.deleteItem(item).subscribe(res=>{
      this.list.splice(index,1);  /* deleting item from the array by its index */
      
    }, error=>{alert("try again")});
  }




  edit(i:number){
    this.itemIndex = i;
  }


  update(item:List, name:string){
    this.itemIndex = undefined;
    this.listService.updateItem(item).subscribe(res=>{
      });
      this.list.map(obj=>{
        if(obj.id == item.id) {obj.name = name}

    })
  }

}
