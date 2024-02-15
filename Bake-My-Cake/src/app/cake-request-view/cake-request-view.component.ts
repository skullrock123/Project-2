import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { CUSTOMERS } from '../models/customerDetailsModel';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cake-request-view',
  templateUrl: './cake-request-view.component.html',
  styleUrls: ['./cake-request-view.component.css'],
})
export class CakeRequestViewComponent implements OnInit {
  customers: CUSTOMERS[] = [];
  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.itemsService.getCustomerDetails().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error: (error) => {
        alert(' ERROR Loading customer Details');
      },
    });
  }

  displayedColumns: string[] = [
    'id',
    'orderedItem',
    'quantity',
    'unit',
    'totalAmount',
    'deliveryDate',
    'customerName',
    'customerEmail',
    'customerAddress',
    'customerPhoneNumber',
    'pinCode',
  ];
  navigateToHome() {
    this.router.navigate(['home']);
  }

  toLogout() {
    let confirmedStatus = confirm('Are you sure you want to Logout?');
    if (confirmedStatus) {
      this.authService.logout();
      this.router.navigate(['home']);
    }
  }
}
