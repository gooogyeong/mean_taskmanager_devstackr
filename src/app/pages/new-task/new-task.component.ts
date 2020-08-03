import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  listId: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params['listId'];
      // console.log(this.listId); 페이지 입장하자마자 5f268e0a495b6318c04f68de 이런식으로 listId 찍힘
    });
  }

  createTask(title: string) {
    this.taskService
      .createTask(title, this.listId)
      .subscribe((response: Task) => {
        //console.log(newTask);
        console.log(response);
        this.router.navigate(['lists', response._listId]);
        //this.router.navigate(['../'], { relativeTo: this.route }); //이렇게 상대 경로 지정해줘도 된다
      });
  }
}
