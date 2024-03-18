import { ICommonMessage } from "./shared_Models";

export interface ITaskModel extends ICommonMessage{
 Id:number,
 UserId:number,
 Title:string,
 Description:string,
 StartDate:string,
 EndDate:string,
 AssignedId:number,
 Status:string,
}

export interface IAddTask_Request{
UserId:number,
Title:string,
Description:string,
StartDate:string,
EndDate:string,
AssignedId:number,
Status:string,
}

export interface AppTask {
  Id: number,
  UserId: number,
  Title: string,
  Description: string,
  StartDate: string,
  EndDate: string,
  AssignedId: number,
  Status: string,
}
export interface IUpdateTask_Request extends IAddTask_Request{
    Id:number
}

export interface ITaskList_Response extends ICommonMessage{
    tasks : AppTask[],
}

export interface IStatus{
    Id:number,
    status:string
}