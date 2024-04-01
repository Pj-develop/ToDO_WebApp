import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() todo: ToDo;
  @Output() todoDel: EventEmitter<ToDo> = new EventEmitter();

  constructor() {
    this.todo = new ToDo();
  }
  OnClick(todo: ToDo) {
    this.todoDel.emit(todo);
    console.log('OnClick', todo);
  }
}
