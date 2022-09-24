export interface MainData {
    transactions: {
        [key: string]: {
            date: string,
            item: string,
            amount: number,
            account: string
        }
    },
    presetTransactions: {
        [key: string]: {
            howOften: string,
            item: string,
            amount: number,
            account: string,
            startDate: string
        }
    },
    accounts: {
        [key: string]: {
            startingAmount: number,
            adjustment: number
        }
    },
}