import React, {JSX} from "react";
import {PersonQuoteChallenge} from "../../../../core/person-quote-challenge/personQuoteChallenge";
import {GuessControl} from "../controls/guessControl";
import {MultiQuoteView} from "../views/multiQuoteView";
import {PersonQuoteChallengeGameState} from "../../../../core/person-quote-challenge/personQuoteChallengeGameState";

interface PersonQuoteChallengeProps {
    personQuoteChallenge: PersonQuoteChallenge;
    personQuoteChallengeGameState: PersonQuoteChallengeGameState;
    onPersonQuoteChallengeGameStateChanged: (newState: PersonQuoteChallengeGameState) => void;
}

/** A component that allows the user to play a daily challenge.
 *
 * @param personQuoteChallenge - The DailyChallenge to play.
 * @param onGameFinished - Action to perform when the game is finished.
 * @constructor
 */
export function PersonQuoteChallengeGame(
    { personQuoteChallenge, personQuoteChallengeGameState, onPersonQuoteChallengeGameStateChanged }: PersonQuoteChallengeProps
): JSX.Element {
    const revealedQuotes: boolean[] = personQuoteChallenge.quotes.map((_, index) => index <= personQuoteChallengeGameState.guesses)

    const isLastGuess: boolean = personQuoteChallengeGameState.guesses == personQuoteChallenge.quotes.length - 1

    function handleSkip(): void{
        if (personQuoteChallengeGameState.finishedGame) return;
        onPersonQuoteChallengeGameStateChanged(
            new PersonQuoteChallengeGameState(
                personQuoteChallengeGameState.guesses + 1,
                personQuoteChallengeGameState.guessedCorrect,
                isLastGuess
            )
        )
    }

    function handleGuess(guess: string): void{
        if (personQuoteChallengeGameState.finishedGame) return;
        const guessIsCorrect: boolean = isGuessCorrect(guess, personQuoteChallenge.person.name)

        onPersonQuoteChallengeGameStateChanged(
            new PersonQuoteChallengeGameState(
                personQuoteChallengeGameState.guesses + 1,
                guessIsCorrect,
                guessIsCorrect || isLastGuess
            )
        )
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" , width: "100%", fontSize: 20}}>
            {MultiQuoteView({quotes: personQuoteChallenge.quotes, revealedQuotes: revealedQuotes})}
            {GuessControl({hintText: "Type the name of the person...", onSkip: handleSkip, onSubmit: handleGuess})}
        </div>
    );
}

function isGuessCorrect(guess: string, person: string)
{
    return guess.toLowerCase() === person.toLowerCase();
}
