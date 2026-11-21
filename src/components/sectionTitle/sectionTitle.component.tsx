import { ReactNode } from "react";

type Props = {
    // Drawing-sheet number shown above the title, e.g. "A-01".
    sheet: string,
    children: ReactNode
}

// Section heading labelled like a sheet in an architectural drawing set.
// The sheet number is decorative, so screen readers only announce the title.
export default function SectionTitle({ sheet, children }: Props) {
    return (
        <h4 className="section-title">
            <span className="sheet-label" aria-hidden="true">{sheet}</span>
            {children}
        </h4>
    )
}
