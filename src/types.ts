export interface MainData {
    years: {
        [key: string]: {
            [key: string]: {
                date: string,
                item: string,
                amount: string,
                number: string,
                account: string
            }
        }
    },
    presetTransactions: {
        [key: string]: {
            howOften: string,
            item: string,
            amount: string,
            account: string,
            startDate: string
        }
    },
    accounts: {
        [key: string]: {
            startingAmount: string
        }
    }
}