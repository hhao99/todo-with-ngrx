import { Component } from '@angular/core';
import { Todo } from '../model/todo'
@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
  title = 'Todo app with ngrx'
  list: Todo[] = [
    new Todo('1st task'),
    new Todo('2nd task')
  ]

  onAdd(task:string) {
    this.list.push(new Todo(task))
    console.log("todo app - add task: " + this.list)
  }

  onRemove(id: string) {
    this.list = this.list.filter( item => item.id !== id)
  }

}
