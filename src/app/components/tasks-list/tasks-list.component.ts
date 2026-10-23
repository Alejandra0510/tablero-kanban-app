import { Component, input, ViewChild } from '@angular/core';
import { UtilsConfig } from '@utils/utils-config';
import { TaskModal } from '@components/task-modal/task-modal.component';

@Component({
  selector: 'atasks-list-component',
  imports: [TaskModal],
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent {

  columns = input.required<Column[]>();

  utils = UtilsConfig;

 @ViewChild(TaskModal) modalNew!: TaskModal;

  openModalNew(){
    this.modalNew.open();
  }

}
