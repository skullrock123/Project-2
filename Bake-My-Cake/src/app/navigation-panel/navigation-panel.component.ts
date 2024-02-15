import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ITEMS } from '../models/itemsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.css'],
})
export class NavigationPanelComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  @Input()
  bakeItems?: ITEMS[] = [];
  @Input()
  filterText?: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  searchText = '';
  search() {
    this.searchTextChanged.emit(this.searchText);
  }
  navigateToHome() {
    this.router.navigate(['home']);
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  @Output()
  selectionPass2: EventEmitter<string> = new EventEmitter<string>();

  onSelectionPass1(event: string) {
    this.filterText = event;
    this.selectionPass2.emit(this.filterText);
  }
}
