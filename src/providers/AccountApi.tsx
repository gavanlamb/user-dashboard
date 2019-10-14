import { IAccount } from "../models/IAccount"

interface IAccountApi {
    getAccountDetails() : IAccount
}

export class AccountApi implements IAccountApi {
    public getAccountDetails() : IAccount {
        return {
            salutation: "Mr",
            firstName: "Gavan",
            lastName: "Lamb",
            email: "gavan@mailinator.com",
            phone: {
                countryCode: "+61",
                phoneNumber: "0406341148"
            }
        };
    }
}