import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'task-modal-component',
  imports: [],
  templateUrl: './task-modal.component.html',
})
export class TaskModal {

  @ViewChild('modalNew') modalView!: ElementRef<HTMLDialogElement>;

  open(): void {
    this.modalView.nativeElement.showModal();
  }


}
