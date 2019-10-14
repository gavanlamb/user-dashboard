import { IAccount } from "../models/IAccount"

export class AccountService {
    public static getAccountDetails() : IAccount {
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