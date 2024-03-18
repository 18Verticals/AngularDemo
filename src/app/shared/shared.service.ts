import { Injectable, signal } from '@angular/core';
import { IStatus } from '../Interfaces/Task_Models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public currentActiveNav = signal<string>('Dashboard');
  public currentActiveNavIcon = signal<string>('fa-tachometer');
  public statusList = signal<IStatus[]>([]);
  constructor() { 
    this.statusList.set([
      {Id:0,status:"New"},
      {Id:1,status:"In Progress"},
      {Id:2,status:"Todo"},
      {Id:3,status:"Ready For Stage"},
      {Id:4,status:"QA Ready"},
      {Id:5,status:"Closed"},
      {Id:6,status:"Details Needed"},
      {Id:7,status:"Fixes Required"},
      {Id:8,status:"Discuss with Client"},
    ])
  }
}
