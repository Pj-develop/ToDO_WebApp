import { Component } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [AddTodoComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
