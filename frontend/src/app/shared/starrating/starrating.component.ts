import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports:[NgFor,NgIf],
  template: `
    <div class="star-rating">
      <span *ngFor="let star of stars; let i = index" (click)="rate(i + 1)">
        <ng-container *ngIf="i < rating">★</ng-container>
        <ng-container *ngIf="i >= rating">☆</ng-container>
      </span>
    </div>
  `,
  styles: [`
    .star-rating { font-size: 24px; cursor: pointer; }
    span{color:gold;}
  `],
  standalone:true
})
export class StarRatingComponent {
  @Input() rating = 0;
  stars = [1, 2, 3, 4, 5];

  rate(value: number) {
    this.rating = value;
  }
}
