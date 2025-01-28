import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    EmployeeTableComponent,
    SearchPageComponent,
    EmployeeComponent,
  ],

  imports: [CommonModule, EmployeesRoutingModule, ReactiveFormsModule],
})
export class EmployeesModule {}
