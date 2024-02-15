import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ITEMS } from '../models/itemsModel';


@Component({
  selector: 'app-nav-container',
  templateUrl: './nav-container.component.html',
  styleUrls: ['./nav-container.component.css']
})
export class NavContainerComponent implements OnInit {
  bakeItems:ITEMS[]=[];
  filterText: string="";
constructor(private itemsService:ItemsService){}
ngOnInit(): void {
  this.itemsService.getItems().subscribe({
    next:(data)=>{
    
      this.bakeItems=data;
    },
    error:(error)=>{
    alert("Error fetching from server!");
    }
  }) 
}
onSearchTextChanged($event:any)
  { 
    this.itemsService.getItems().subscribe({
      next:(data)=>{
        if($event=="")
        {
        this.bakeItems=data;
        }
        else{
          this.bakeItems=data;
          this.bakeItems=this.bakeItems.filter((item)=>{
            return (item.itemName?.toLowerCase().includes($event.toLowerCase()));
            
          })
        }
      },
      error:(error)=>{
      alert("Error fetching from server!");
      }
    })
  }

  
  onSelectionPass2(event:string)
  {
  this.filterText=event;
  this.itemsService.getItems().subscribe({
    next:(data)=>{
      if(this.filterText=="" ||this.filterText=="All")
      {
      this.bakeItems=data;
      }
      else{
        this.bakeItems=data;
        this.bakeItems=this.bakeItems.filter((item)=>{
          return (item.category?.toLowerCase().startsWith(this.filterText.toLowerCase()));
          
        })
      }
    },
    error:(error)=>{
    alert("Error fetching from server!");
    }
  })
}

  
  }
 
