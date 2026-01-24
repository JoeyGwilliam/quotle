/**
 * The game state of a PersonalQuoteChallenge.
 */
export class PersonQuoteChallengeGameState {
    /**
     * A challenge for a single day.
     * @param guesses - The number of guesses.
     * @param guessedCorrect - Was the person found?
     * @param finishedGame - Was the game finished?
     */
    constructor(
        public guesses: number,
        public guessedCorrect: boolean,
        public finishedGame: boolean,
    ) {
    }
}
