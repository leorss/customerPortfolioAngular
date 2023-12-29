import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card'
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/menu/menu.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ListCustomerComponent } from './component/list-customer/list-customer.component';
import { LoginComponent }  from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ErrorComponent } from './component/error/error.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent }  from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageModalComponent } from './component/message-modal/message-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    ListCustomerComponent,
    LoginComponent,
    LogoutComponent,
    ErrorComponent,
    WelcomeComponent,
    FooterComponent,
    MessageModalComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
