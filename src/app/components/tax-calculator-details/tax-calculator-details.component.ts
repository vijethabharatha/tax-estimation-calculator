import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Result, ResultColumns, ResultStore } from '../../models/result.model';
import { TaxCalculatorDataSource } from '../../models/tax-calculator.datasource';

@Component({
    selector: 'tax-calculator-details',
    templateUrl: './tax-calculator-details.component.html',
    styleUrls: ['./tax-calculator-details.component.css']
})
export class TaxCalculatorDetailsComponent implements OnChanges {
    dataSource: TaxCalculatorDataSource;
    @Input() taxDetails: ResultStore;

    public ngOnChanges(changes: SimpleChanges) {
        if (this.taxDetails) {
            this.dataSource = new TaxCalculatorDataSource([this.taxDetails.taxStore])
        }
    }

    get taxColumns() {
        return ResultColumns;
    }
}
