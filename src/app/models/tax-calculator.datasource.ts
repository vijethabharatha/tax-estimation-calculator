import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Result } from './result.model';

export class TaxCalculatorDataSource extends DataSource<any> {
    constructor(public taxStore: Array<Result>) {
        super();
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Array<Result>> {
        return Observable.of(this.taxStore);
    }

    public disconnect() { }
}