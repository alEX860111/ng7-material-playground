import { NgModule } from '@angular/core';
import { MatButtonModule, MatTableModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FancyButtonComponentComponent } from './fancy-button-component/fancy-button-component.component';
import { FancyTableComponentComponent } from './fancy-table-component/fancy-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FancyButtonComponentComponent,
    FancyTableComponentComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
