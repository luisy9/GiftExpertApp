import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsComponent } from './components/gifts/gifts.component';
import { PageHomeComponent } from './pages/page-home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';



@NgModule({
  declarations: [
    PageHomeComponent,
    GiftsComponent,
    SearchBarComponent,
    CardListComponent,
    CardItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GiftsComponent, PageHomeComponent]
})
export class GiftsModule { }
