import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './components/autocomplete/autocomplete/autocomplete.component';
import { ToggleComponent } from './components/toggle/toggle/toggle.component';
import { CardComponent } from './components/card/card/card.component';
import { DatepickerComponent } from './components/datepicker/datepicker/datepicker.component';
import { ExpansionPanelComponent } from './components/expansion_panel/expansion-panel/expansion-panel.component';
import { GridlistComponent } from './components/gridlist/gridlist/gridlist.component';
import { CommonComponent } from './components/common/common/common.component';
@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    ToggleComponent,
    CardComponent,
    DatepickerComponent,
    ExpansionPanelComponent,
    GridlistComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
