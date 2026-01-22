import {PersonQuoteChallenge} from "../person-quote-challenge/personQuoteChallenge";

/**
 * A challenge for a given day.
 */
export class DailyChallenge {
    /**
     * A challenge for a single day.
     * @param day - The day this challenge is for.
     * @param personQuoteChallenge - a PersonQuoteChallenge for the day.
     */
    constructor(
        public day: Date,
        public personQuoteChallenge: PersonQuoteChallenge,
    ) {}

    isSameDay(date: Date): boolean {
        return date.getFullYear() === this.day.getFullYear() &&
            date.getMonth() === this.day.getMonth() &&
            date.getDate() === this.day.getDate();
    }
}
