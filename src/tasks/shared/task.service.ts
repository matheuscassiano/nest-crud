import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Task 01', completed: false },
    { id: 2, description: 'Task 02', completed: false },
    { id: 3, description: 'Task 03', completed: false },
    { id: 4, description: 'Task 04', completed: false },
    { id: 5, description: 'Task 05', completed: false },
    { id: 6, description: 'Task 06', completed: false },
    { id: 7, description: 'Task 07', completed: false },
    { id: 8, description: 'Task 08', completed: false },
    { id: 9, description: 'Task 09', completed: false },
    { id: 10, description: 'Task 10', completed: false }
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find(value => value.id == id);
    return task;
  }

  create(task: Task) {

  }

  update(task: Task) {

  }

  delete(id: number) {

  }
}
