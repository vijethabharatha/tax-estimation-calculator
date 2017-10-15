import { Injectable } from '@angular/core';

import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';

@Injectable()
export class TaxCalculatorService {

    // the below tax calculation is generally fetched from a service
    // the below calculation code can be replaced by a service call
    // and map the data to payload and dispatch with sucess/failure call
    calculateTax(query: Query) {
        let result = new Result();
        let gross = 0;
        let superAnnuation = 0;

        if (query.isSuperIncluded) {
            let i = query.income;
            let s = query.super * (i / 100);
            gross = (i / (i + s)) * i;
            superAnnuation = i - gross;
        } else {
            gross = query.income;
            superAnnuation = query.super * (gross / 100);
        }

        let tax = 0;
        if (gross <= 18200) {
            tax = 0;
        } else if (gross > 18200 && gross <= 37000) {
            tax = (gross - 18200) * (19 / 100);
        } else if (gross > 37000 && gross <= 87000) {
            tax = 3572 + ((gross - 37000) * (32.5 / 100));
        } else if (gross > 87000 && gross <= 180000) {
            tax = 19822 + ((gross - 87000) * (37 / 100));
        } else if (gross > 180000) {
            tax = 54232 + ((gross - 180000) * (45 / 100));
        }

        result.gross = gross;
        result.super = superAnnuation;
        result.tax = tax;

        return result;
    }
}