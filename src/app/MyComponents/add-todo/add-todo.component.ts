import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../ToDo';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  sn: number;
  title: string;
  desc: string;
  active: boolean;
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();

  constructor() {
    this.title = '';
    this.desc = '';
    this.sn = 999;
    this.active = true;
  }
  onSubmit() {
    const todo = {
      title: this.title,
      desc: this.desc,
      sno: 888,
      active: true,
    };
    this.todoAdd.emit(todo);
    console.log('Submitted');
  }
}
