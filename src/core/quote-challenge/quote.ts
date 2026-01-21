/**
 * A person and their personal details.
 */
export class Quote {
    /**
     * Creates a new Quote
     * @param quote - The words that were said.
     * @param date - When the words were uttered.
     * @param context - Any extra context around the uttering of the words.
     */
    constructor(
        public quote: string,
        public date: string,
        public context: string | null = null
    ) {}

}
