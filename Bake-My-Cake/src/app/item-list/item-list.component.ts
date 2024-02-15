import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../models/itemsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  @Input()
  item: ITEMS = {};

  colour: string = '';
  hoverStatus: boolean = false;

  buttonClick() {
    if (this.colour == '' || this.colour == 'black') this.colour = 'red';
    else this.colour = 'black';
  }
  navigateToOrderView(item: any) {
    this.router.navigate(['order', item.id]);
  }
}
