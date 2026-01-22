import {ChallengeCalendar} from "../core/challenge-calendar/challengeCalendar";
import {DailyChallenge} from "../core/challenge-calendar/dailyChallenge";
import {PersonQuoteChallenge} from "../core/person-quote-challenge/personQuoteChallenge";
import {Quote} from "../core/person-quote-challenge/quote";
import {Person} from "../core/person-quote-challenge/person";


const _DAILY_CHALLENGES: DailyChallenge[] = [
    new DailyChallenge(
        new Date("2026-01-22"),
        new PersonQuoteChallenge(
            [
                new Quote(
                    "[I ask] the question of the role the police should play, if any, in civil society. " +
                    "Who are they protecting and from what?",
                    "1986"
                ),
                new Quote(
                    "We accept and respect the outcome of the referendum.",
                    "2016"
                ),
                new Quote(
                    "The only time he ran in a competitive election, he got trounced by the former prime " +
                    "minister, who herself got beaten by lettuce!",
                    "2022",
                ),
                new Quote(
                    "I can't wait for them to stop their antics, frankly.",
                    "2023",
                    "On the Just Stop Oil protests"
                ),
                new Quote(
                    "I call again for the return of the sausages.",
                    "2024",
                    "The intended word was 'hostages'"
                ),
            ],
            new Person("Kier Starmer")
        )
    ),
    new DailyChallenge(
        new Date("2026-01-23"),
        new PersonQuoteChallenge(
            [
                new Quote(
                    "[I ask] the question of the role the police should play, if any, in civil society. " +
                    "Who are they protecting and from what?",
                    "1986"
                ),
                new Quote(
                    "We accept and respect the outcome of the referendum.",
                    "2016"
                ),
                new Quote(
                    "The only time he ran in a competitive election, he got trounced by the former prime " +
                    "minister, who herself got beaten by lettuce!",
                    "2022",
                ),
                new Quote(
                    "I can't wait for them to stop their antics, frankly.",
                    "2023",
                    "On the Just Stop Oil protests"
                ),
                new Quote(
                    "I call again for the return of the sausages.",
                    "2024",
                    "The intended word was 'hostages'"
                ),
            ],
            new Person("Kier Starmer")
        )
    ),
]

export const CHALLENGE_CALENDAR_DATA = new ChallengeCalendar(
    _DAILY_CHALLENGES
)
