import { Component, OnInit, Input } from '@angular/core';

import { ITEMS } from '../models/itemsModel';

@Component({
  selector: 'app-item-manager',
  templateUrl: './item-manager.component.html',
  styleUrls: ['./item-manager.component.css'],
})
export class ItemManagerComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input()
  bakeItems?: ITEMS[] = [];
}
