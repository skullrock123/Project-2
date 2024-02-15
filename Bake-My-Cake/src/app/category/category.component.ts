import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  selectedCategory: string = 'All';

  @Output()
  selectionPass1: EventEmitter<string> = new EventEmitter<string>();

  onCategorySelected() {
    this.selectionPass1.emit(this.selectedCategory);
  }
}
