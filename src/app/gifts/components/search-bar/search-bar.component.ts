import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'search-bar',
  template:`  
    <input
      type="text"
      class="border-none rounded-md p-1 
      px-5"
      placeholder="Introduce el nombre"
      (keyup.enter)="searchTag()"
      #searchInput
    />
  `,
})
export class SearchBarComponent {

  constructor(private giftsService: GiftsService){}

  @ViewChild('searchInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  
  
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.giftsService.searchTag(newTag);

    this.tagInput.nativeElement.value = "";
  }
}