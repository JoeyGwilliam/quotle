import {QuoteChallenge} from "../quote-challenge/quoteChallenge";
import {DailyChallenge} from "./dailyChallenge";

/**
 * A calendar of challenges.
 */
export class ChallengeCalendar {
    /**
     * A challenge for a single day.
     * @param dailyChallenges - The daily challenges in this calendar.
     */
    constructor(
        public dailyChallenges: DailyChallenge[],
    ) {}

    /**
     * Gets the challenge for a given day.
     * @param date - The date to get the challenge for
     */
    getDailyChallenge(date: Date) : DailyChallenge
    {
        // TODO: create a hash map on init from date to daily challenges to make this quicker?
        //  Only expect to do this once per load though...
        for (const dailyChallenge of this.dailyChallenges) {
            if (dailyChallenge.isSameDay(date)) {
                return dailyChallenge;
            }
        }

        const dateString: string = date.toISOString().split('T')[0];
        throw new Error(`Challenge not found for day ${dateString}.`);
    }

}
