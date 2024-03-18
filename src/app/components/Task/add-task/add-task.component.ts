import { Component } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  statusList = this.sharedService.statusList;
  constructor(private sharedService: SharedService) {}
}
