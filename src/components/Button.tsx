import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    placementCenter?: boolean;
    onClick?: () => void;
    buttonType?:
        | "primary"
        | "secondary"
        | "success"
        | "info"
        | "warning"
        | "danger"
        | "light"
        | "dark"
        | "link";
}

const Button = ({
    children,
    placementCenter = false,
    onClick = () => {},
    buttonType = "primary",
}: Props) => {
    let buttonClass = "btn btn-";
    buttonClass = buttonClass + buttonType;
    if (placementCenter) buttonClass = buttonClass + " center";
    return (
        <button type="button" className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
