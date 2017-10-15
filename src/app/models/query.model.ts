export class Query {
    public income: number;
    public super: number;
    public isSuperIncluded: boolean;
}

// all these can be moved to resource file in future.
export const superAnnuationDefault = '9.5';
export const superAnnuationHint = '(>= 9.5%)';
export const messageRequired = 'You must enter a value';
export const messageInvalidIncome = 'Income must be greater than $0';
export const messageInvalidSuper = 'Superannuation must be greater than or equal to 9.5%';
export const messageEmpty = '';
export const required = 'required';
export const pattern = 'pattern';
export const invalidsuper = 'invalidsuper';
export const incomeRegex = '^[1-9][0-9]*$';