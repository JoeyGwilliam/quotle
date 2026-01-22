import {JSX, useState} from "react";
import {PersonQuoteChallenge} from "../../../../core/person-quote-challenge/personQuoteChallenge";
import {GuessControl} from "../controls/guessControl";
import {MultiQuoteView} from "../views/multiQuoteView";
import {PersonQuoteChallengeResults} from "../../../../core/person-quote-challenge/personQuoteChallengeResults";

interface PersonQuoteChallengeProps {
    personQuoteChallenge: PersonQuoteChallenge;
    onGameFinished?: (results: PersonQuoteChallengeResults) => void;
}

/** A component that allows the user to play a daily challenge.
 *
 * @param personQuoteChallenge - The DailyChallenge to play.
 * @param onGameFinished - Action to perform when the game is finished.
 * @constructor
 */
export function PersonQuoteChallengeGame({ personQuoteChallenge, onGameFinished }: PersonQuoteChallengeProps): JSX.Element {
    const [quoteIndex, setQuoteIndex] = useState<number>(0);

    const revealedQuotes: boolean[] = personQuoteChallenge.quotes.map((_, index) => index <= quoteIndex)
    const isLastQuote = quoteIndex == personQuoteChallenge.quotes.length - 1;

    function handleGameFinished(guessIsCorrect: boolean): void{
        const incorrectGuesses: number = guessIsCorrect ? quoteIndex : quoteIndex + 1;
        const results = new PersonQuoteChallengeResults(incorrectGuesses, guessIsCorrect);
        setQuoteIndex(personQuoteChallenge.quotes.length);
        if (onGameFinished){
            onGameFinished(results);
        }
    }

    function handleSkip(): void{
        if (isLastQuote){
            handleGameFinished(false);
        }
        else {
            setQuoteIndex(quoteIndex + 1);
        }
    }

    function handleGuess(guess: string): void{
        const guessIsCorrect: boolean = isGuessCorrect(guess, personQuoteChallenge.person.name)
        if (guessIsCorrect || isLastQuote){
            handleGameFinished(guessIsCorrect);
        }
        else {
            setQuoteIndex(quoteIndex + 1);
        }
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
