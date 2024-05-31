import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Gift } from '../../interfaces/gifs.interface';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})

export class CardListComponent {
  constructor(private giftsService: GiftsService){}

  public gifts: Gift[] = this.giftsService.getGifs;

  get getGifts(): Gift[] {
    return this.giftsService.getGifs;
  }
};