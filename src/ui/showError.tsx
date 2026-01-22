import {JSX} from "react";

export function ShowError(error: unknown): JSX.Element
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
