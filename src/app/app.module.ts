import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material.module';

import { taxCalculatorReducer } from './reducers/tax-calculator.reducer';
import { TaxCalculatorEffects } from './effects/tax-calculator.effect';

import { AppComponent } from './app.component';
import { TaxCalculatorComponent } from './components/tax-calculator/tax-calculator.component';
import { TaxCalculatorDetailsComponent } from './components/tax-calculator-details/tax-calculator-details.component';
import { TaxCalculatorService } from './services/tax-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    TaxCalculatorComponent,
    TaxCalculatorDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot({ taxStore: taxCalculatorReducer }),
    EffectsModule.forRoot([TaxCalculatorEffects])

  ],
  providers: [TaxCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
