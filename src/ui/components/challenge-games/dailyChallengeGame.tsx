import React, {JSX, useState} from "react";
import {DailyChallenge} from "../../../core/challenge-calendar/dailyChallenge";
import {PersonQuoteChallengeGame} from "./person-quote-challenge-game/personQuoteChallengeGame";
import {PersonQuoteChallengeResultsView} from "./person-quote-challenge-game/personQuoteChallengeResultsView";
import {DailyChallengeGameState} from "../../../core/dailyChallengeGameState";
import {PersonQuoteChallengeGameState} from "@/core/person-quote-challenge/personQuoteChallengeGameState";


interface DailyChallengeProps {
    dailyChallenge: DailyChallenge;
    dailyChallengeGameState: DailyChallengeGameState;
    onDailyChallengeGameStateChanged: (newState: DailyChallengeGameState) => void;
}

/** A component that allows the user to play a daily challenge.
 *
 * @param dailyChallenge - The DailyChallenge to play.
 * @param dailyChallengeGameState - The state of the challenge.
 * @param onDailyChallengeGameStateChanged - Called when the state changes.
 * @constructor
 */
export function DailyChallengeGame(
    { dailyChallenge, dailyChallengeGameState, onDailyChallengeGameStateChanged }: DailyChallengeProps
): JSX.Element {
    const [personQuoteChallengeGameState, setPersonQuoteChallengeGameState] = useState(
        dailyChallengeGameState.personQuoteChallengeGameState
    );

    function handlePersonQuoteChallengeGameStateChanged (newState: PersonQuoteChallengeGameState): void {
        setPersonQuoteChallengeGameState(newState);
        onDailyChallengeGameStateChanged(
            new DailyChallengeGameState(newState),
        );
    }

    return (
        <div style={{
            display: "flex", gap: "8px", alignItems: "stretch", justifyContent: "center", position: "relative" ,
            backgroundColor:"#ac8764"}
        }>
            {<PersonQuoteChallengeGame personQuoteChallenge={dailyChallenge.personQuoteChallenge}
                                       personQuoteChallengeGameState={personQuoteChallengeGameState}
                                       onPersonQuoteChallengeGameStateChanged={handlePersonQuoteChallengeGameStateChanged} />}

            {personQuoteChallengeGameState.finishedGame
                && <PersonQuoteChallengeResultsView gameState={personQuoteChallengeGameState}
                                                    person={dailyChallenge.personQuoteChallenge.person} />}
        </div>
    );
}
