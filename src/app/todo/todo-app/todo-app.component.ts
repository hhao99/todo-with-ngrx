import { Component, OnInit } from '@angular/core';

import { Todo } from '../model/todo'
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit{
  title = 'Todo app with ngrx'
  list: Todo[] = []

  constructor(private todoService:TodoService) {}
  ngOnInit(): void {
    this.list = this.todoService.List
  }

  onAdd(task:string) {
    this.todoService.addTodo(task)
  }

  onRemove(id: string) {
    this.todoService.removeTodo(id)
  }

}
