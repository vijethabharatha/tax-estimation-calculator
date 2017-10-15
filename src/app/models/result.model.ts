export class Result {
    public gross: number;
    public super: number;
    public tax: number;
}

export class ResultStore {
    public taxStore: Result;
}

export const ResultColumns = ['gross', 'super', 'grossSuper', 'tax', 'net', 'netSuper'];