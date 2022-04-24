import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete/autocomplete.component';
import { CardComponent } from './components/card/card/card.component';
import { CommonComponent } from './components/common/common/common.component';
import { DatepickerComponent } from './components/datepicker/datepicker/datepicker.component';
import { ExpansionPanelComponent } from './components/expansion_panel/expansion-panel/expansion-panel.component';
import { GridlistComponent } from './components/gridlist/gridlist/gridlist.component';
import { ToggleComponent } from './components/toggle/toggle/toggle.component';

const routes: Routes = [
  {
    path:"",
    component:CommonComponent
  },
  {
    path: "autocomplete",
    component: AutocompleteComponent
  },
  {
    path: "toggle",
    component: ToggleComponent
  },
  {
    path: "card",
    component: CardComponent
  },
  {
    path: "datepicker",
    component: DatepickerComponent
  },
  {
    path : "expansionPanel",
    component: ExpansionPanelComponent
  },
  {
    path: "gridList",
    component: GridlistComponent
  },
  {
    path: "**",
    component: CommonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //   routingComponents = [
  //   AutocompleteComponent,
  //   ToggleComponent,
  //   CardComponent,
  //   DatepickerComponent,
  //   ExpansionPanelComponent,
  //   GridlistComponent
  // ]
 }
