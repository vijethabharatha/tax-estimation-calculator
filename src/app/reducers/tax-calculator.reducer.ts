import { Action } from '@ngrx/store';

import { Query } from '../models/query.model';
import { Result } from '../models/result.model';
import * as actions from '../actions/tax-calculator.action';

export const initialState = {
	taxStore: {
		gross: 0,
		super: 0,
		tax: 0,
	}
};

export function taxCalculatorReducer(state = initialState, action: actions.TaxCalculatorActions) {
	switch (action.type) {
		case actions.CALCULATE_TAX_COMPLETE:
		// since there is no state to maintain in this particular example
		// we are not saving the state, else it would have been like: 
		// return [...state, action.payload]
			return action.payload;
		default:
			return state;
	}
}

export const taxStore = 'taxStore';