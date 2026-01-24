import {JSX, useState} from "react";

import {Person} from "../../../../core/person-quote-challenge/person";
import {PersonQuoteChallengeGameState} from "@/core/person-quote-challenge/personQuoteChallengeGameState";


interface PersonQuoteChallengeResultsViewProps {
    gameState: PersonQuoteChallengeGameState;
    person: Person;
}

/** A component that allows the user to play a daily challenge.
 *
 * @param personQuoteChallenge - The DailyChallenge to play.
 * @constructor
 */
export function PersonQuoteChallengeResultsView({ gameState, person }: PersonQuoteChallengeResultsViewProps): JSX.Element {
    let winOrLoseText: string;

    if (gameState.guessedCorrect) {
        winOrLoseText = "You win!";
    }
    else {
        winOrLoseText = "You lose!";
    }

    return (
        <div style={{
            position: "absolute",
            top: "110%",
            left: "25%",
            width: "50%",
            height: "50%",
            fontSize: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#c5a787",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            gap: "10px"
        }}>
            <div>
                {winOrLoseText}
            </div>

            <div>
                Guesses: {gameState.guesses}
            </div>

            <div>
                The person was: {person.name}
            </div>

        </div>
    );
}
