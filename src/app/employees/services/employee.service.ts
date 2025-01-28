import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  private url = 'http://localhost:8080/api/v1/employees';
  private urlJsonServer = 'http://localhost:3000/employees';

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.urlJsonServer);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.urlJsonServer}/${id}`);
  }
}
