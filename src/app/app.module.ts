import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McEditorComponent } from './mc-editor/mc-editor.component';
import { DxHtmlEditorModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
@NgModule({
  declarations: [
    AppComponent,
    McEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DxHtmlEditorModule, BrowserAnimationsModule,MatTooltipModule,PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
