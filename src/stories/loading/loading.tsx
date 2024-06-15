import { Size } from "@costumeTypes/size.type";
import { LoadingProps } from "./loading.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
    tiny: "loading-xs",
    small: "loading-sm",
    normal: "loading-md",
    large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
    variant,
    type = "spinner",
    size = "large",
    className,
}: LoadingProps) => {

    const classes = classNames(
        "loading",
        className,
        { [`${sizeClasses[size]}`]: size },
        { [`loading-${variant}`]: variant },
        { [`loading-${type}`]: type },
    );
    return (
        <span data-testid="loading" className={classes}></span>
    );
};