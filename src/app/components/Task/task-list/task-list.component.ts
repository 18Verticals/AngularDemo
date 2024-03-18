import { Component, OnInit, signal } from '@angular/core';
import { AppTask, ITaskList_Response } from '../../../Interfaces/Task_Models';
import { TaskApiService } from '../task-api.service';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  public taskList = signal<AppTask[]>([]);
  constructor(
    private taskApi:TaskApiService,
    private authService:AuthService,
    private toastr:ToastrService,
    private ngbModel:NgbModal) {
    
  }

  ngOnInit() {
    this.getTaskList();
  }


  private getTaskList(){
    let Id = this.authService.getLoggedInUserInfo().Id
    if (Id != null) {
      this.taskApi.GetTaskByAssignedId(Id).subscribe((res:ITaskList_Response)=>{
            res.tasks = [
              {
                Id: 0,
                UserId: 0,
                Title: 'Test',
                Description: 'Test',
                StartDate: '01/01/2000',
                EndDate: '01/01/2000',
                AssignedId: 2,
                Status: 'New',
              },
            ];
            this.taskList.set(res.tasks)
          if (res.isError) {
            this.toastr.error(res.message)
          }
      })
    }
  }


  public createTask(){
    var overlay = this.ngbModel.open(AddTaskComponent, { size: 'lg' })
    overlay.result.then((res)=>{
      
    })
  }
}
