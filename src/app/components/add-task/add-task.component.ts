import { Component, EventEmitter, OnInit ,Output} from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text?: string ;
  day?: string ;
  reminder: boolean = false;
  showAddTask: boolean = true;
  subscription: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription=this.uiService.onToggle().subscribe((value)=>(this.showAddTask=value))
  }
  ngOnInit(): void {
      
  }
  onSubmit() {
    if (!this.text) {
      alert("pleas add an event")
      return;
    }
    if (!this.day) {
      alert("pleas add a day")
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder:this.reminder,
    }
    this.onAddTask.emit(newTask);
    this.text = "";
    this.day = "";
    this.reminder = false;

  }

}
