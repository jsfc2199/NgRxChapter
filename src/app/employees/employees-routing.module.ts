import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'list', component: EmployeeTableComponent },
      { path: 'search', component: SearchPageComponent },
      { path: '**', redirectTo: 'list' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
