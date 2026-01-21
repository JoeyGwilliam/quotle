import {ChallengeCalendar} from "../core/challenge-calendar/challengeCalendar";
import {DailyChallenge} from "../core/challenge-calendar/dailyChallenge";
import {QuoteChallenge} from "../core/quote-challenge/quoteChallenge";
import {Quote} from "../core/quote-challenge/quote";
import {Person} from "../core/quote-challenge/person";

const _DAILY_CHALLENGES: DailyChallenge[] = [
    new DailyChallenge(
        new Date("2026-01-21"),
        new QuoteChallenge(
            [
                new Quote("hello world", "today")
            ],
            new Person("homer")
        )
    ),
]

export const CHALLENGE_CALENDAR_DATA = new ChallengeCalendar(
    _DAILY_CHALLENGES
)
