import { Component, inject } from '@angular/core';

@Component({
  selector: 'task-details-component',
  imports: [],
  templateUrl: './task-details.component.html',
})
export class TaskDetailsComponent {

  // private location = inject(Location);

  goBack() {
    // this.location;
  }

}
