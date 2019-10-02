import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})



export class ItemsComponent implements OnInit {


  items:Item[]=[];

  index:number=0; /* to get the index of the clicked card */
  
  arr = new Array(5); /* array to generate stars in Modal */


  constructor(private listService: ListService) { }

  ngOnInit() {
  
    
    this.listService.getItems().subscribe(response=>{
      this.items = response as Item[]
    })
  }


  sendIndex(i){
    this.index = i;
  }


}
