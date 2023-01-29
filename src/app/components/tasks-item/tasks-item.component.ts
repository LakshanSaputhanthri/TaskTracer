import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit{
[x: string]: any;
  @Input() task: Task | undefined
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  ngOnInit(): void {
      
  }
  onDelete(task: any) {
    console.log(task);
    this.onDeleteTask.emit(task)
  }
  onToggle(task:any) {
    this.onToggleReminder.emit(task)
  }

}
