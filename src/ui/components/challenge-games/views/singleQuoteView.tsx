import React from "react";
import {Quote} from "../../../../core/person-quote-challenge/quote";
import {RevealableText} from "../../generic/revealableText";

interface SingleQuoteViewProps {
    quote: Quote;
    isRevealed: boolean;
}

/**
 * Views a quote.
 * @param quote - The quote to view.
 * @param isRevealed - If the quote is revealed.
 * @constructor
 */
export function SingleQuoteView({ quote, isRevealed }: SingleQuoteViewProps) {
    let fullQuote: string = `"${quote.quote}"`;
    if (quote.context) {
        fullQuote += `\n[${quote.context}]`;
    }


    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",  // Top align
            gap: "25px"
        }}>
            <div>
                <RevealableText text={fullQuote} isRevealed={isRevealed}/>
            </div>
            <div>
                <RevealableText text={quote.date} isRevealed={isRevealed}/>
            </div>
        </div>
    );
}