type User = {
    id: number,
    registrationDate: string, //DD-MM-YYYY
    messegesCount: number,
    warningsCount: number
}

class TrustedUser {
    user: User;
    constructor(user: User) {
        this.user = user;
    }

    private GetRegistrationPeriod(): number {
        let currentDateTime = new Date();
        let registrationDate = this.user.registrationDate;
        let yearsDiff = Number(registrationDate.slice(6)) - currentDateTime.getFullYear();
        let monthDiff = Number(registrationDate.slice(3, 5)) - currentDateTime.getMonth();
        let daysDiff = Number(registrationDate.slice(0, 2)) - currentDateTime.getDay();
        let registrationPeriod = yearsDiff * 365 + monthDiff * 30 + daysDiff;
        return registrationPeriod;
    }

    public getConfidenceRatio(): number {
        let registrationPeriod = this.GetRegistrationPeriod();
        let confidenceCoefficient = this.user.messegesCount * 2 - this.user.warningsCount * 100 + registrationPeriod;
        return confidenceCoefficient;
    }

}

class ConfidenceHelper {
    public static checkConfidenceRatio(user: TrustedUser): boolean {
        return user.getConfidenceRatio() >= 0;
    }
}


let users: User[] = [
    {
        "id": 1,
        "registrationDate": "15-07-2020",
        "messegesCount": 200,
        "warningsCount": 1
    },
    {
        "id": 2,
        "registrationDate": "20-08-2022",
        "messegesCount": 1,
        "warningsCount": 6
    },
    {
        "id": 3,
        "registrationDate": "31-10-2022",
        "messegesCount": 1,
        "warningsCount": 20
    },
    {
        "id": 4,
        "registrationDate": "15-07-1999",
        "messegesCount": 200000000,
        "warningsCount": 1
    },
]


let trustedUsers: Array<TrustedUser> = new Array<TrustedUser>;
for (let i = 0; i < users.length; i++) {
    let trustedUser = new TrustedUser(users[i])
    if (ConfidenceHelper.checkConfidenceRatio(trustedUser)) {
        trustedUsers.push(trustedUser);
    }
}

console.log(trustedUsers)