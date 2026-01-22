import React, {JSX, useState} from 'react';
import {CHALLENGE_CALENDAR_DATA} from "../data/challengeCalendarData";
import {DailyChallenge} from "../core/challenge-calendar/dailyChallenge";
import {DailyChallengeGame} from "./components/challenge-games/dailyChallengeGame";

export function ShowApp(): JSX.Element
{
    const [guess, setGuess] = useState<string>("No guess yet bro");

    // TODO - use StringSimilarity

    const today: Date = new Date();
    const dailyChallenge: DailyChallenge = CHALLENGE_CALENDAR_DATA.getDailyChallenge(today)
    const dailyChallengeGame = DailyChallengeGame({dailyChallenge});

    return (
        <div className="App" style={{backgroundColor: "#301f17",
            fontFamily: "Consolas",}}>
            <header className="App-header" >
                <div style={{display: "flex", justifyContent: "center", fontSize: 50, paddingBottom: "20px",
                    backgroundColor: "#63402c" }}>
                    QUOTLE!
                </div>
            </header>


            <div style={{ paddingLeft: "20vw", paddingRight: "20vw", justifyContent: "center" ,
            backgroundColor: "#301f17" }}>
                {dailyChallengeGame}
            </div>

        </div>
    );
}
