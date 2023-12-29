import { Component, HostListener, ViewChild } from '@angular/core';
import { CostumerDataService } from 'src/app/service/data/costumer-data.service';
import { Customer } from 'src/app/model/customer';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {

  customers!: MatTableDataSource<Customer>;
  displayedColumns: string[] = ['cnpj', 'name', 'latitude', 'longitude', 'options'];
  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private costumerDataService: CostumerDataService,
    private router: Router,
    private snackBar: MatSnackBar,
    ) {

  }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.costumerDataService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = new MatTableDataSource(data);
      this.customers.paginator = this.paginator;
    },
    (error) => {
      this.showErrorSnack('Error fetching customers:' + error);
    }
    );
  }

  applyFilter() {
    this.customers.filter = this.searchText.trim().toLowerCase();
  }

  edit(id: number) {
    this.router.navigate(['customer/' + id]);
  }

  delete(id: number){
    this.costumerDataService.deleteCustomer(id).subscribe(
      (data) => {
        this.fetchCustomers();
        this.showErrorSnack('Customer deleted successfully!');
      },
      (error) => {
        this.showErrorSnack('Error deleting customer!');
      }
    );
  }

  showSuccessSnack(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000
    });
  }

  showErrorSnack(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: 'error-toast'
    });

  }

}
