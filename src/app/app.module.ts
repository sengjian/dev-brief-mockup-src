import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ScrollTopModule } from 'primeng/scrolltop';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ToolbarModule,
    MenubarModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    ScrollTopModule,
    AccordionModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    MenuModule,
    SidebarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
