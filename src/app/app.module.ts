import { AddItemComponent } from './todo/add-item/add-item.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TodoAppComponent } from './todo/todo-app/todo-app.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoService } from './todo/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
