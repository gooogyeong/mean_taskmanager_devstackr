import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //service들 끼리도 이런 식으로 inject 하는거군
  constructor(private webReqService: WebRequestService) {}

  createList(title: string) {
    //send a web request to create a list
    return this.webReqService.post('lists', { title });
  }

  getLists() {
    return this.webReqService.get('lists');
  }

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }

  toggleTaskComplete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed, //true, //!task.completed,
    });
  }
}
