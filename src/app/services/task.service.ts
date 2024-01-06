import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:4210/Tasks"

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  toggleTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, {...task, reminder: !task.reminder})
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task)
  }
}
