import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Subscription } from 'rxjs';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-search-page',
  standalone: false,

  templateUrl: './search-page.component.html',
})
export class SearchPageComponent {
  private fb = inject(FormBuilder);
  private employeeService = inject(EmployeeService);

  employee?: Employee
  employeeSubscription: Subscription = new Subscription()

  searchForm = this.fb.group({
    idSearch: ['', [Validators.max(24), Validators.min(1)]],
  });

  onSubmit(): void {
    if(this.searchForm.invalid) return
    const id = +this.searchForm.controls['idSearch'].value!;

    this.employeeSubscription = this.employeeService.getEmployeeById(id)
    .subscribe(employee => {
      this.employee = employee
    })
  }

  ngOnDestroy(): void {
    this.employeeSubscription.unsubscribe()
  }
}
