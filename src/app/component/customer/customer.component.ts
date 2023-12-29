import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CostumerDataService } from 'src/app/service/data/costumer-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerId!: any;
  customer: Customer = {} as Customer;
  isLoaded: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private costumerDataService: CostumerDataService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    if (this.customerId) {
      this.initializeForm();
    } else {
      this.isLoaded = true;
    }
  }

  onSubmit() {
    (this.customerId) ? this.editCustomer() : this.createCustomer();
  }

  private createCustomer() {
    this.costumerDataService.createCustomer(this.customer).subscribe(
      (response) => {
        this.showSuccessSnack('Customer added successfully!');
      },
      (error) => {
        this.showErrorSnack('Error adding customer. Please try again.');
      }
    );
  }

  private editCustomer() {
    this.costumerDataService.editCustomer(this.customer).subscribe(
      (response) => {
        this.showSuccessSnack('Customer edited successfully!');
      },
      (error) => {
        this.showErrorSnack('Error editing customer. Please try again.');
      }
    );
  }

  isFormValid(): boolean {
    return (
      this.isValidField(this.customer?.cnpj) &&
      this.isValidField(this.customer?.name) &&
      this.isValidField(this.customer?.latitude) &&
      this.isValidField(this.customer?.longitude)
    );
  }

  isValidField(field: any): boolean {
    return field !== null && field !== '';
  }

  initializeForm() {
    this.costumerDataService.getCustomer(this.customerId).subscribe(
      (data) => {
        this.customer = data;
        this.isLoaded = true;
      },
      (error) => {
        this.router.navigate(['customers'])
        this.showErrorSnack('Customer not found!');
      }
    );
  }

  showSuccessSnack(message: string) {
    this.router.navigate(['customers']);
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }

  showErrorSnack(message: string) {
    this.router.navigate(['customers']);
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'error-toast'
    });
  }

}
