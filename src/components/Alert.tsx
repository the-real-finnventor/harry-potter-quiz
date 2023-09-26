import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode;
    hidden?: boolean;
}

const Alert = ({ children, hidden = false }: Props) => {
    const [alertHidden, updateAlertHidden] = useState(false);
    const handleClose = () => updateAlertHidden(true);
    let divClassName = "alert alert-dismissible alert-primary";
    if (alertHidden) divClassName = divClassName + " visually-hidden";
    if (hidden) divClassName = divClassName + " visually-hidden";
    return (
        <div className={divClassName}>
            <button
                type="button"
                onClick={handleClose}
                className="btn-close"
            ></button>
            {children}
        </div>
    );
};

export default Alert;
