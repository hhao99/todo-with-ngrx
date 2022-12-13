import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo
  @Output() remove: EventEmitter<string> = new EventEmitter<string>()

  onRemove(id: string) {
    this.remove.emit(id)
  }

}
