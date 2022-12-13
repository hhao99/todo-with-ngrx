import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid'
import { Observable, of } from 'rxjs';
import { Todo } from './model/todo'


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list:Todo[]= [
    { id: nanoid(), task: '1st task' }
  ]

  constructor() { }

  get List() {
    return this.list
  }

  addTodo(task: string) {
    const todo = {id: nanoid(), task}
    this.list.push(todo)
  }
  removeTodo(id: string) {
    this.list.splice(this.list.findIndex( item => item.id === id),1)
  }
}
