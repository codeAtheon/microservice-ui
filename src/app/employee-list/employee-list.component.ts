import { Component, OnInit } from '@angular/core';
import  {EmployeeService}  from 'src/app/shared/employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {
	  this.service.getAllEmployee();
	  console.log(this.service.list);
  }
  
  
  onDelete(id :number){
	  
	  
	  this.service.onDeleteEmployee(id).subscribe(res =>{
	  
	  this.service.getAllEmployee();
	  
	  } );
	  
  }
  

}
