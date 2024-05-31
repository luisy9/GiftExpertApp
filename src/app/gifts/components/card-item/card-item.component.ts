import { Component, Input, OnInit } from '@angular/core';
import { Gift } from '../../interfaces/gifs.interface';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css',
})
export class CardItemComponent implements OnInit {
  @Input()
  public item?: Gift;

  ngOnInit(): void {
    if (!this.item)  throw new Error('ningun item');
  }

  constructor(){
    console.log(this.item);
  }
}
