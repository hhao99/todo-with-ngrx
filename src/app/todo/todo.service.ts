import { Injectable } from '@angular/core';
import { Todo } from './model/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list: Todo[] = [
    new Todo('1st task'),
    new Todo('2nd todo')
  ]

  constructor() { }

  get List() {
    return this.list
  }

  addTodo(task: string) {
    const todo = new Todo(task)
    this.list.push(todo)
  }
  removeTodo(id: string) {
    this.list.splice(this.list.findIndex( item => item.id === id),1)
  }
}
