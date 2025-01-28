import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Search Employee', url: './search', icon: 'fa-magnifying-glass' },
    { label: 'Check All Employees', url: './list', icon: 'fa-table' },
  ];
}
