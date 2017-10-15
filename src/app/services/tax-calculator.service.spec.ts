import { Injectable } from '@angular/core';

import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';
import { TaxCalculatorService } from './tax-calculator.service';

describe('TaxCalculatorService', () => {

    // Test for Super IS included
    describe('Test for Super IS included', () => {
        it('should calculate the tax BY including the super in the income', () => {
            let query: Query = { income: 100000, super: 9.5, isSuperIncluded: true };

            let result = new Result();
            let i = query.income;
            let s = query.super * (i / 100);
            result.gross = (i / (i + s)) * i;
            result.super = i - result.gross;
            result.tax = 19822 + ((result.gross - 87000) * (37 / 100));

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
    
    // Test Super IS NOT included
    describe('Test Super IS NOT included', () => {
        it('should calculate the tax without including the super in the income', () => {
            let query: Query = { income: 100000, super: 9.5, isSuperIncluded: false };

            let result = new Result();
            result.gross = query.income;
            result.super = query.super * (result.gross / 100);
            result.tax = 19822 + ((result.gross - 87000) * (37 / 100));

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
    
    // Test for tax for income below 18200
    describe('Test for tax for income below 18200', () => {
        it('should be no tax', () => {
            let query: Query = { income: 18200, super: 9.5, isSuperIncluded: false };

            let result = new Result();
            result.gross = query.income;
            result.super = query.super * (result.gross / 100);
            result.tax = 0;

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
    
    // Test for tax for income between 18200 & 37000
    describe('Test for tax for income between 18200 & 37000', () => {
        it('should have tax for income between 18200 & 37000', () => {
            let query: Query = { income: 37000, super: 9.5, isSuperIncluded: false };

            let result = new Result();
            result.gross = query.income;
            result.super = query.super * (result.gross / 100);
            result.tax = (result.gross - 18200) * (19 / 100);

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
    
    // Test for tax for income between 37000 & 87000
    describe('Test for tax for income between 37000 & 87000', () => {
        it('should have tax for income between 37000 & 87000', () => {
            let query: Query = { income: 87000, super: 9.5, isSuperIncluded: false };

            let result = new Result();
            result.gross = query.income;
            result.super = query.super * (result.gross / 100);
            result.tax = 3572 + ((result.gross - 37000) * (32.5 / 100));

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
    
    // Test for tax for income between 87000 & 180000
    describe('Test for tax for income between 87000 & 180000', () => {
        it('should have tax for income between 87000 & 180000', () => {
            let query: Query = { income: 180000, super: 9.5, isSuperIncluded: false };

            let result = new Result();
            result.gross = query.income;
            result.super = query.super * (result.gross / 100);
            result.tax = 19822 + ((result.gross - 87000) * (37 / 100));

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
    
    // Test for tax for income > 180000
    describe('Test for tax for income greater than 180000', () => {
        it('should have tax for income greater than 180000', () => {
            let query: Query = { income: 180001, super: 9.5, isSuperIncluded: false };

            let result = new Result();
            result.gross = query.income;
            result.super = query.super * (result.gross / 100);
            result.tax = 54232 + ((result.gross - 180000) * (45 / 100));

            let svc  = new TaxCalculatorService();
            expect(result).toEqual(svc.calculateTax(query));
        });
    });
});