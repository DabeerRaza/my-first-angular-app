import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = []

  constructor(private taskService: TaskService) { }
  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  ngOnInit(): void {
    this.getTasks()
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  taskToggle(task: Task) {
    this.taskService.toggleTaskReminder(task).subscribe(() => this.getTasks())
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}
