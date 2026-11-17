import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
    icon: IconDefinition
    size?: "xs" | "lg" | "2x"
};

// Renders a Font Awesome icon definition as inline SVG. Only the icons that are
// imported end up in the bundle: no icon font and no render-blocking CDN stylesheet.
export default function Icon({ icon, size, className, ...rest }: Props) {
    const [width, height, , , path] = icon.icon;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={`0 0 ${width} ${height}`}
            className={["icon", size && `icon-${size}`, className].filter(Boolean).join(" ")}
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            {...rest}
        >
            <path d={Array.isArray(path) ? path.join(" ") : path} />
        </svg>
    );
}
