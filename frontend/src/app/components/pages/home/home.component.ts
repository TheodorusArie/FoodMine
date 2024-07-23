import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../../shared/starrating/starrating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet, NgFor, CommonModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[] = [];
  constructor(private foodService:FoodService){
    this.foods = this.foodService.getAll();
   }
}
