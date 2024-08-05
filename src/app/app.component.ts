import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat tree', 
      userName: 'nature', 
      content: 'A cool tree', 
      imageUrl: 'Koorta1.png'},
    { 
      title: 'Another tree', 
      userName: 'treelover', 
      content: 'A cool tree', 
      imageUrl: 'Koorta2.png'},
    { 
      title: 'Thats too many trees', 
      userName: 'leaf', 
      content: 'A cool tree', 
      imageUrl: 'Koorta3.png'},
  ]
}
