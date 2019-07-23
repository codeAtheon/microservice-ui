import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient}  from '@angular/common/http';
// import {Http, Response} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

formData: Employee;
readonly rootURl="http://10.234.235.159:8088";

public list : Employee[];
data: Object;
  constructor(private http : HttpClient) {

	  }
  
  
  
  
  postEmployee(formData:Employee){
	  
	  console.log('data'+formData);
	  
	return  this.http.post(this.rootURl+"/employee",formData);
	  
  }
  
  getAllEmployee(formData:Employee){
	  
	//  console.log("check get all employee");
	//   console.log("type..."+typeof(list));
	this.http.get(this.rootURl+"/employees").toPromise().then(
	res => this.list = res as Employee[]
	);
	
	// this.http.get(this.rootURl+"/employees")
    //  .subscribe((res: Response) => {
   //     this.list=Array.of(res.json())
   //   });
	//console.log(this.list+'    data');
	//this.list = res as Employee[]

	 console.log("check list values"+this.list);
	  /employees/
  }
  
  onDeleteEmployee(id : number){
	  
	return  this.http.delete(this.rootURl+"/employees/"+id);  
	  
  }
  
  
  
}
