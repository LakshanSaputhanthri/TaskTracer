import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string='Task Tracer';
  showAddTask?: boolean;
  subcription?: Subscription;
  constructor(private uiService: UiService) {
    this.subcription=this.uiService.onToggle().subscribe(value=>(this.showAddTask=value))
  }
  ngOnInit(): void { }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
