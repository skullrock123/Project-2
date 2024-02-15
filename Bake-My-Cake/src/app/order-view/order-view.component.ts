import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { ITEMS } from '../models/itemsModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CUSTOMERS } from '../models/customerDetailsModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
})
export class OrderViewComponent {
  item: ITEMS = {};
  customerData: CUSTOMERS = {};
  quantity: number = 1;
  amount: number = 1;
  clickStatus: boolean = true;
  minDate = new Date();
  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id') ?? 0;
      this.itemsService.getItemsWithId(id).subscribe({
        next: (data) => {
          this.item = data;
          this.amount = data.price!;
        },
        error: (error) => {
          alert('Error fetching Id!!');
        },
      });
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  add() {
    if (this.item.category === 'Cakes') {
      this.quantity = this.quantity + 0.5;
      this.amount = this.item.price! * this.quantity!;
      console.log(this.amount);
    } else {
      this.quantity = this.quantity + 1;
      this.amount = this.item.price! * this.quantity!;
      console.log(this.amount);
    }
  }

  subtract() {
    if (this.quantity != 1) {
      if (this.item.category === 'Cakes') {
        this.quantity = this.quantity - 0.5;
        this.amount = this.item.price! * this.quantity!;
        console.log(this.amount);
      } else {
        this.quantity = this.quantity - 1;
        this.amount = this.item.price! * this.quantity!;
        console.log(this.amount);
      }
    }
  }

  onSubmit() {
    this.clickStatus = !this.clickStatus;
  }

  onSubmitForm() {
    this.customerData.quantity = this.quantity;
    this.customerData.totalAmount = this.amount;
    this.customerData.orderedItem = this.item.itemName;
    this.customerData.unit = this.item.unit;
    this.itemsService.saveCustomer(this.customerData).subscribe({
      next: (data) => {
        this.snackBar.open('Order Successfully placed 🍰', 'Success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
      },
      error: (error) => {
        alert('Error!! Order Not placed');
      },
    });

    this.router.navigate(['home']);
  }
}
