import React, {JSX, useState} from "react";
import { IconButton, TextField } from "@mui/material";
import { Cancel, CheckCircle } from "@mui/icons-material";

interface GuessControlProps {
    hintText?: string;
    onSubmit?: (value: string) => void;
    onSkip?: () => void;
}

/** A bar that allows the user to submit a guess, or skip.
 *
 * @param hintText - Text to display in the text field.
 * @param onSubmit - Action to perform when submit or Enter pressed.
 * @param onSkip - Action to perform when skip pressed.
 * @constructor
 */
export function GuessControl({ hintText = "", onSubmit, onSkip }: GuessControlProps): JSX.Element {
    const [inputValue, setInputValue] = useState<string>("");

    function handleSubmit(): void {
        if (onSubmit) {
            onSubmit(inputValue);
        }
        setInputValue("");
    }

    function handleSkip(): void {
        if (onSkip) {
            onSkip();
        }
        setInputValue("");
    }

    function handleKeyDown(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <div style={{display: "flex", gap: "8px", alignItems: "stretch", backgroundColor: "#c5a787"}}
             onKeyDown={handleKeyDown}
        >
            <IconButton
                onClick={handleSkip}
                style={{color: "red"}}
            >
                <Cancel fontSize="large"/>
            </IconButton>

            <TextField
                fullWidth
                variant="outlined"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={hintText}
                InputProps={{
                    sx: {
                        fontFamily: "inherit",
                    },
                }}
                InputLabelProps={{
                    sx: {
                        fontFamily: "inherit",
                    },
                }}
            />

            <IconButton
                onClick={handleSubmit}
                style={{color: "green"}}
            >
                <CheckCircle fontSize="large"/>
            </IconButton>
        </div>
    );
}
