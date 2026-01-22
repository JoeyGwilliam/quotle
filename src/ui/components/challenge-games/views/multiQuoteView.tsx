import React, {useState} from "react";
import {SingleQuoteView} from "./singleQuoteView";
import {Quote} from "../../../../core/person-quote-challenge/quote";

interface MultiQuoteViewProps {
    quotes: Quote[];
    revealedQuotes: boolean[];
}

/**
 * Views a quote.
 * @param quote - The quote to view.
 * @param revealedQuotes - The quotes that are revealed.
 * @constructor
 */
export function MultiQuoteView({ quotes, revealedQuotes }: MultiQuoteViewProps) {
    const quoteViews = quotes.map((quote, index) => (
        <SingleQuoteView key={index} quote={quote}
                         isRevealed={revealedQuotes[index]} />
    ))

    return (
        <div style={
            {display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center",
            gap:"60px"}
        }>
            {quoteViews}
        </div>
    );
}
