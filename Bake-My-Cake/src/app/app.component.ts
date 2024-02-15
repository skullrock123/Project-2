import { Component,OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';
import { ITEMS } from './models/itemsModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(){};
  bakeItems:ITEMS[]=[]
  ngOnInit(): void {
    
  }
  
}
