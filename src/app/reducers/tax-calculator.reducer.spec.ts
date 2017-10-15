import { Action } from '@ngrx/store';

import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';
import * as actions from '../actions/tax-calculator.action';
import * as reducer from './tax-calculator.reducer';
import { TaxCalculatorService } from '../services/tax-calculator.service';

describe('TaxCalculatorReducer', () => {

    // TEST CASE FOR UNDEFINED ACTION.
    describe('undefined action', () => {
        it('should return the default state', () => {
            const action = {} as any;
            const result = reducer.taxCalculatorReducer(undefined, action);
            expect(result).toEqual(reducer.initialState);
        });
    });

    // TEST CASE FOR CALCULATE_TAX_COMPLETE ACTION
    describe('CALCULATE_TAX_COMPLETE action', () => {
        it('should return the same state that has been passed in the payload', () => {
            let taxCal = new TaxCalculatorService();
            let q: Query = { income: 100000, super: 9.5, isSuperIncluded: true };
            let r: ResultStore = { taxStore: taxCal.calculateTax(q) };
            let action = new actions.CalculateTaxCompleteAction(r);

            expect(r).toEqual(reducer.taxCalculatorReducer(reducer.initialState, action));
        });
    });
});

