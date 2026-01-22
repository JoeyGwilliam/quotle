import {Quote} from "./quote";
import {Person} from "./person";

/**
 * Results from a finished PersonalQuoteChallenge.
 */
export class PersonQuoteChallengeResults {
    /**
     * A challenge for a single day.
     * @param incorrectGuesses - The number of incorrect guess.
     * @param wonGame - Was the person found?
     */
    constructor(
        public incorrectGuesses: number,
        public wonGame: boolean,
    ) {
    }
}
