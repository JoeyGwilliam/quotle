import {Quote} from "./quote";
import {Person} from "./person";

/**
 * A challenge where a person must be guessed by their quotes.
 */
export class PersonQuoteChallenge {
    /**
     * A challenge for a single day.
     * @param quotes - Quotes by the person
     * @param person - The person to be guessed
     * @param requiredContext - Context deemed necessary to guess the person
     */
    constructor(
        public quotes: Quote[],
        public person: Person,
        public requiredContext: string | null = null
    ) {
    }
}
