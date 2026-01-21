import React, {JSX} from 'react';
import {CHALLENGE_CALENDAR_DATA} from "./data/challengeCalendarData";

function App(): JSX.Element {
    try
    {
        return _ShowApp();
    }
    catch (error)
    {
        return _ShowError(error);
    }
}

function _ShowApp(): JSX.Element
{
    const today: Date = new Date();
    const dailyChallenge = CHALLENGE_CALENDAR_DATA.getDailyChallenge(today)

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    QUOTLE! <br /> <br />
                    Today's first quote is: <br />
                    "{dailyChallenge.quoteChallenge.quotes[0].quote}"
                </p>
            </header>
        </div>
    );
}

function _ShowError(error: unknown): JSX.Element
{
    const errorMessage = error instanceof Error ? error.message : String(error);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Error playing Quotle. What a disgrace! <br /> <br />
                    The error was:
                    "{errorMessage}"
                </p>
            </header>
        </div>
    );
}

export default App;
