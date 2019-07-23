import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
   { path: 'GetEmployee', component: GetemployeeComponent },
    { path: 'DeleteEmployee', component: EmployeeListComponent },
	 { path: 'PostEmployee', component: EmployeeComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
