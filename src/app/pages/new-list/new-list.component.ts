import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  createList(title: string) {
    this.taskService.createList(title).subscribe((response: List) => {
      console.log(response); // {_id: "5f26b5c04dfa7d41b4f2dca2", title: "Test Task", __v: 0}
      //then naviagate to /lists/response._id
      this.router.navigate(['lists', response._id]);
    });
  }
}
