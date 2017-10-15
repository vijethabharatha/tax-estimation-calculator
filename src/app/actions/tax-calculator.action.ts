import { Action } from '@ngrx/store';
import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';


export const CALCULATE_TAX = 'CALCULATE_TAX';
export const CALCULATE_TAX_COMPLETE = 'CALCULATE_TAX_COMPLETE';

export class CalculateTaxAction implements Action {
    readonly type = CALCULATE_TAX;

    constructor(public payload: Query) { }
}

export class CalculateTaxCompleteAction implements Action {
    readonly type = CALCULATE_TAX_COMPLETE;

    constructor(public payload: ResultStore) { }
}

export type TaxCalculatorActions = CalculateTaxAction | CalculateTaxCompleteAction;