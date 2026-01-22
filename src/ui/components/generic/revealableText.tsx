interface RevealableTextProps {
    text: string;
    isRevealed: boolean;
}

/** Text that can be hidden or revealed.
 *
 * @param text - The text.
 * @param isRevealed - Whether to hide or show it.
 * @constructor
 */
export function RevealableText({ text, isRevealed }: RevealableTextProps) {
    return (
        <div style={{
            pointerEvents: isRevealed ? "auto" : "none",
            userSelect: isRevealed ? "auto" : "none",
            transition: "filter 0.5s ease-in-out",
                filter: isRevealed ? "blur(0px)" : "blur(7px)"
    }}>
    {text}
    </div>
);
}
