import { Component, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-individual-employee',
  standalone: false,

  templateUrl: './employee.component.html',
})
export class EmployeeComponent {
  @Input() employee?: Employee
}
