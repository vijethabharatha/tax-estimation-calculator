import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { NgForm, FormControl, Validators } from "@angular/forms";

import * as query from '../../models/query.model';
import { Result, ResultStore } from '../../models/result.model';
import { taxStore } from '../../reducers/tax-calculator.reducer'
import * as actions from '../../actions/tax-calculator.action';


@Component({
    selector: 'tax-calculator',
    templateUrl: './tax-calculator.component.html',
    styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent {
    result: any;
    income = new FormControl(query.messageEmpty, [Validators.required, Validators.pattern(query.incomeRegex)]);
    super = new FormControl(query.superAnnuationDefault, [Validators.required, this.superValueCheck]);
    isSuperIncluded = new FormControl(false);

    constructor(private store: Store<ResultStore>) {
        this.result = store.select(taxStore);
    }

    get validateIncome() {
        if (this.income.hasError(query.required)) {
            return query.messageRequired;
        } else if (this.income.hasError(query.pattern)) {
            return query.messageInvalidIncome;
        } else {
            return query.messageEmpty;
        }
    }

    get validateSuper() {
        if (this.super.hasError(query.required)) {
            return query.messageRequired;
        } else if (this.super.hasError(query.invalidsuper)) {
            return query.messageInvalidSuper;
        } else {
            return query.messageEmpty;
        }
    }

    superValueCheck(input: FormControl) {
        let isValid = input.value >= 9.5;
        return isValid ? null : { invalidsuper: !isValid };
    }

    get superHint() {
        return query.superAnnuationHint;
    }

    search() {
        if (this.income.valid && this.super.valid) {
            let q = new query.Query();
            q.income = this.income.value;
            q.super = this.super.value;
            q.isSuperIncluded = this.isSuperIncluded.value;
            this.store.dispatch(new actions.CalculateTaxAction(q));
        }
    }
}
