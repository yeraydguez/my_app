import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TabletListComponent } from './tablet-list/tablet-list.component';
import { CreateTabletComponent } from './create-tablet/create-tablet.component';
import { TabletDetailsComponent } from './tablet-details/tablet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    TabletListComponent,
    CreateTabletComponent,
    TabletDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
