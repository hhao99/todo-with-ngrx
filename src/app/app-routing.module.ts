import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddItemComponent } from './todo/add-item/add-item.component';
import { TodoAppComponent } from './todo/todo-app/todo-app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoAppComponent },
  { path: 'new', component: AddItemComponent},
  { path: 'list', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
