import {JSX, useState} from "react";
import {DailyChallenge} from "../../../core/challenge-calendar/dailyChallenge";
import {PersonQuoteChallengeResults} from "../../../core/person-quote-challenge/personQuoteChallengeResults";
import {PersonQuoteChallengeGame} from "./person-quote-challenge-game/personQuoteChallengeGame";
import {PersonQuoteChallengeResultsView} from "./person-quote-challenge-game/personQuoteChallengeResultsView";


interface DailyChallengeProps {
    dailyChallenge: DailyChallenge;
}

/** A component that allows the user to play a daily challenge.
 *
 * @param dailyChallenge - The DailyChallenge to play.
 * @constructor
 */
export function DailyChallengeGame({ dailyChallenge }: DailyChallengeProps): JSX.Element {
    const [personQuoteChallengeResults, setPersonQuoteChallengeResults] = useState<PersonQuoteChallengeResults | null>(null);


    function onPersonQuoteChallengeGameFinished(results: PersonQuoteChallengeResults): void{
        setPersonQuoteChallengeResults(results);
    }

    return (
        <div style={{
            display: "flex", gap: "8px", alignItems: "stretch", justifyContent: "center", position: "relative" ,
            backgroundColor:"#ac8764"}
        }>
            {<PersonQuoteChallengeGame personQuoteChallenge={dailyChallenge.personQuoteChallenge}
                                       onGameFinished={onPersonQuoteChallengeGameFinished} />}

            {personQuoteChallengeResults != null
                && <PersonQuoteChallengeResultsView results={personQuoteChallengeResults}
                                                    person={dailyChallenge.personQuoteChallenge.person} />}
        </div>
    );
}
