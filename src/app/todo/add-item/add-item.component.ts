import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Output() submit: EventEmitter<string> = new EventEmitter<string>()

  task:string = ''

  onSubmit(task:string) {
    this.submit.emit(task)
  }


}
