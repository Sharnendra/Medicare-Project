import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { StockInsertComponent } from './medi/stock-insert/stock-insert.component';
import { CompanyInsertComponent } from './medi/company-insert/company-insert.component';
import { TokenInterceptor } from './core/Token-Interceptor';
import { MedicineService } from './medi/medicine.service';
import { StockShowComponent } from './medi/stock-show/stock-show.component';
import { CompanyInsertComponent2 } from './medi/company-insert2/company-insert2.component';
import { CompanyShowComponent } from './medi/company-show/company-show.component';
import { InvoiceInsertComponent } from './medi/Invoice-insert/Invoice-insert.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    StockInsertComponent,
    StockShowComponent,
    CompanyInsertComponent,
    CompanyInsertComponent2,
    CompanyShowComponent,
    InvoiceInsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ModalModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }