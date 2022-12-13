import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../model/todo';

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
