import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as actions from '../actions/tax-calculator.action';
import { Result, ResultStore } from '../models/result.model';
import { TaxCalculatorService } from '../services/tax-calculator.service';

@Injectable()
export class TaxCalculatorEffects {
    constructor(private actions$: Actions<actions.CalculateTaxAction>,
        private taxCalculatorService: TaxCalculatorService) { }

    @Effect()
    search$: Observable<Action> = this.actions$
        .ofType(actions.CALCULATE_TAX)
        .map(toPayload)
        .switchMap(query => {

            // the below tax calculation is generally fetched from a service
            // the below calculation code can be replaced by a service call
            // and map the data to payload and dispatch with sucess/failure call
            let result = this.taxCalculatorService.calculateTax(query);

            return Observable.of(new actions.CalculateTaxCompleteAction({ taxStore: result }));
        });
}
