import IPhone from './IPhone'

export interface IAccount {
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: IPhone;
}