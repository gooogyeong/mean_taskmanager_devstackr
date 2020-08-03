import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full' /*component: TaskViewComponent*/,
  },
  { path: 'new-list', component: NewListComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent },
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
