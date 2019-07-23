import { Component, OnInit } from '@angular/core';
import  {EmployeeService}  from 'src/app/shared/employee.service';
@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.css']
})
export class GetemployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
	  this.service.getAllEmployee();
	  console.log(this.service.list);
  }
  

}
