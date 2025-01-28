import { Component, inject } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';
import { delay, Subscription } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: false,
  templateUrl: './employee-table.component.html',
})
export class EmployeeTableComponent {
  private employeeService = inject(EmployeeService)

  employees: Employee[] = []
  employeeSubscription: Subscription = new Subscription()
  loading: boolean = true

  ngOnInit(): void {
    this.employeeSubscription = this.employeeService.getAllEmployees()
    .pipe(
      delay(2000)
    )
    .subscribe(employees => {
      this.employees = employees
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe()
  }
}
