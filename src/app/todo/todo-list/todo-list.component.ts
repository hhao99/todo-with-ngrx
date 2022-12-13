import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../model/todo';

const initialList: Array<Todo> = [
  new Todo('1st task'),
  new Todo('2nd task')
]
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() list!: Todo[]
  @Output() remove: EventEmitter<string> = new EventEmitter<string>()

  onRemove(id: string) {
    this.remove.emit(id)
  }
}
