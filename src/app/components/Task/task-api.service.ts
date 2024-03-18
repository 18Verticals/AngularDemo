import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { IAddTask_Request, ITaskList_Response, ITaskModel, IUpdateTask_Request } from '../../Interfaces/Task_Models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  constructor(private http: HttpClient) {}

  /**
   * To Get Task list
   * @returns 
   */
  public GetTaskList() {
    return this.http
      .get<ITaskList_Response>(environment.apiUrl + '/api/Task/GetTasks')
      .pipe(
        map((res: ITaskList_Response) => {
          for (let index = 0; index < res.tasks.length; index++) {
            res.tasks[index].StartDate = new Date(
              res.tasks[index].StartDate
            ).toLocaleString();
            res.tasks[index].EndDate = new Date(
              res.tasks[index].EndDate
            ).toLocaleString();
          }
          return res;
        })
      );
  }
  public AddTask(request:IAddTask_Request){
    return this.http.post<ITaskModel>(
      environment.apiUrl + '/api/Task/AddTask',
      request
    );
  }

  public UpdateTask(request:IUpdateTask_Request){
    return this.http.post<ITaskModel>(
      environment.apiUrl + '/api/Task/UpdateTask',
      request
    );
  }

  public GetTaskById(Id:number){
    return this.http.get<ITaskModel>(
      environment.apiUrl + `/api/Task/GetTaskById/${Id}`);
  }

  public DeleteTask(Id:number){
    return this.http.delete<ITaskModel>(
      environment.apiUrl + `/api/Task/DeleteTask/${Id}`);
  }

  public GetTaskByAssignedId(Id:number){
    return this.http.get<ITaskList_Response>(
      environment.apiUrl + `/api/Task/GetTaskByAssignedId/${Id}`);
  }
}
