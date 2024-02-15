import { Component, Input, OnInit } from '@angular/core';
import { ITEMS } from '../models/itemsModel';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css'],
})
export class LandingViewComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input()
  bakeItems?: ITEMS[] = [];
}
