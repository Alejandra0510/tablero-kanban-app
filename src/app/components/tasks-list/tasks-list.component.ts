import { Component, input, ViewChild } from '@angular/core';
import { UtilsConfig } from '@utils/utils-config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'atasks-list-component',
  imports: [RouterLink],
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {

  columns = input.required<Column[]>();

  utils = UtilsConfig;

}
