import {PersonQuoteChallengeGameState} from "@/core/person-quote-challenge/personQuoteChallengeGameState";

/**
 * The game state of a daily challenge.
 */
export class DailyChallengeGameState {
    /**
     * A challenge for a single day.
     * @param personQuoteChallengeGameState - The person quote challenge game state.
     */
    constructor(
        public personQuoteChallengeGameState: PersonQuoteChallengeGameState,
    ) {
    }
}
