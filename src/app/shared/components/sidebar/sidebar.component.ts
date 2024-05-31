import { Component } from '@angular/core';
import { GiftsService } from '../../../gifts/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private giftsService: GiftsService){}

  get gifts(): string[] {
    return this.giftsService.tagsHistory;
  }

  searchTag = (tag: string) => this.giftsService.searchTag(tag);
}
