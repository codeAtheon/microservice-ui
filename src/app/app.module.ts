import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import  {EmployeeService}  from 'src/app/shared/employee.service';
import { HttpClientModule
 } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    DashboardComponent,
    GetemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	BrowserAnimationsModule,
	HttpClientModule
  ],
  exports: [
   EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
