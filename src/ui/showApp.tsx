import React, {JSX, useState} from 'react';
import {CHALLENGE_CALENDAR_DATA} from "../data/challengeCalendarData";
import {DailyChallengeGame} from "./components/challenge-games/dailyChallengeGame";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, {Dayjs} from "dayjs";
import {DailyChallengeGameState} from "../core/dailyChallengeGameState";
import {PersonQuoteChallengeGameState} from "../core/person-quote-challenge/personQuoteChallengeGameState";

export function ShowApp(): JSX.Element
{
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));
    const [gameStatesByDate, setGameStatesByDate] = useState<Map<string, DailyChallengeGameState>>(new Map());

    // TODO - use StringSimilarity
    function handleDateChange(newValue: Dayjs | null): void {
        if (newValue) setSelectedDate(newValue);

    }

    function handleDailyChallengeGameStateChange(newState: DailyChallengeGameState): void {
        setGameStatesByDate(prev => new Map(prev).set(getDateKey(selectedDate.toDate()), newState));
    }

    const selectedDateKey: string = getDateKey(selectedDate.toDate())

    return (
        <div className="App" style={{backgroundColor: "#301f17",
            fontFamily: "Consolas",}}>
            <header className="App-header" >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , backgroundColor: "#63402c"}}>
                    <div style={{ flex: 1 }} /> {/* Spacer */}
                    <div>QUOTLE!</div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={selectedDate}
                                onChange={handleDateChange}
                                minDate={dayjs(CHALLENGE_CALENDAR_DATA.dailyChallenges[0].day)}
                                maxDate={dayjs(new Date())}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
            </header>


            <div style={{ paddingLeft: "20vw", paddingRight: "20vw", justifyContent: "center" ,
            backgroundColor: "#301f17" }}>
                <DailyChallengeGame
                    key={selectedDateKey}
                    dailyChallenge={CHALLENGE_CALENDAR_DATA.getDailyChallenge(selectedDate.toDate())}
                    dailyChallengeGameState={gameStatesByDate.get(getDateKey(selectedDate.toDate())) ?? getInitialDailyChallengeGameState()}
                    onDailyChallengeGameStateChanged={handleDailyChallengeGameStateChange}
                />
            </div>

        </div>
    );
}

function getInitialDailyChallengeGameState(): DailyChallengeGameState {
    return new DailyChallengeGameState(
      new PersonQuoteChallengeGameState(0, false, false)
    );
}

function getDateKey(selectedDate: Date) {
    return dayjs(selectedDate).format('YYYY-MM-DD')
}
