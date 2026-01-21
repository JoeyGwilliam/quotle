/**
 * A single person.
 */
export class Person {
    /**
     * Creates a new Person
     * @param name - The name of the person.
     * @param wikipediaPageURL - The link to this person's wikipedia page.
     */
    constructor(
        public name: string,
        public wikipediaPageURL: string | null = null,
    ) {}

}
