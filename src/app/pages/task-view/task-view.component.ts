import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  lists: List[]; //any just for now
  tasks: Task[];

  ngOnInit(): void {
    //subscribe to route changes.
    //Observable을 subscribe하는거임. (route.params = Observable)
    //whenever we change route, it will notify the Observable
    //and we get the listId.
    //왜냐하면 (아마도) TaskViewComponent는 path가 '/lists'이거나 '/lists/:listId'일때 렌더링되니까
    this.route.params.subscribe((params: Params) => {
      //console.log(params);
      //http://localhost:4200/lists => {}
      //http://localhost:4200/lists/abc => {listId: "abc"}
      //리스트를 클릭해서 URL이 달라질때마다 콘솔에 params가 계속 새로 찍힘.
      //{listId: "5f268e0a495b6318c04f68de"} -> {listId: "5f26b53bd3128a6a583c7869"} -> {listId: "5f26b5c04dfa7d41b4f2dca2"} ...

      this.taskService.getTasks(params.listId).subscribe((tasks: Task[]) => {
        //console.log(tasks);
        this.tasks = tasks;
      });
    });
    this.taskService.getLists().subscribe((lists: List[]) => {
      //console.log(lists); [{...}, {...}, ...]
      this.lists = lists;
    });
  }

  onTaskClick(task: Task) {
    console.log(task);
    this.taskService.toggleTaskComplete(task).subscribe(() => {
      console.log('toggle success');
      //UI에서 취소선 그려줘야함. 안그러면 리로드해야 취소선생김.
      task.completed = !task.completed; //true;
    });
  }

  createNewList(/*title: string*/) {}
}
