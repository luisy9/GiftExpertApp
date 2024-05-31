import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HanburgerMenuComponent } from './components/hanburger-menu/hanburger-menu.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HanburgerMenuComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [SidebarComponent]
})
export class SharedModule { }
