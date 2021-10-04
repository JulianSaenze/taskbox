import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasksInOrder: Task[] = [];
  /* check if its in loading state */
  @Input() loading: boolean = false;
  /* Event to change the task to pinned */
  @Output()
  onPinTask = new EventEmitter<Event>();

  /* Event to change the task to archived */
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter((task) => task.state === 'TASK_PINNED'),
      ...arr.filter((task) => task.state !== 'TASK_PINNED'),
    ];
  }
}
