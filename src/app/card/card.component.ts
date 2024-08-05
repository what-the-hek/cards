import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  // @Input tells angular it's getting it's data from a parent component
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() userName = '';
  @Input() content = '';

}
