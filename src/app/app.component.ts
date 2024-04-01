import { Component, Inject } from '@angular/core';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './ToDo';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HeroSectionComponent } from './MyComponents/hero-section/hero-section.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CommonModule,
    FooterComponent,
    HeroSectionComponent,
    AddTodoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Angular';
  ToDo1: ToDo[];
  //localItem: string | null;

  deleteTodoP = (todo: ToDo) => {
    const index = this.ToDo1.indexOf(todo);
    this.ToDo1.splice(index, 1);
    console.log('deleteTodoP', todo);
    //localStorage.setItem('todos', JSON.stringify(this.ToDo1));
  };

  addTodoP = (todo: ToDo) => {
    console.log('AddTodoP', todo);
    this.ToDo1.push(todo);
    //localStorage.setItem('todos', JSON.stringify(this.ToDo1));
  };

  constructor() {
    //this.localItem = localStorage.getItem('todos');
    //if (this.localItem === null) {
    this.ToDo1 = [];
    //} else {
    //this.ToDo1 = JSON.parse(this.localItem);
    //}
  }
}
