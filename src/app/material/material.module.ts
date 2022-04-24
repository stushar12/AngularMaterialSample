import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

const MaterialComponents: any =[
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonToggleModule,
  MatCardModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatIconModule,
  MatGridListModule,
  MatTooltipModule
]

@NgModule({
  imports: [MaterialComponents
  ],
  exports: [MaterialComponents

  ]
})
export class MaterialModule { }
