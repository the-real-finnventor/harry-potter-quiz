import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    items?: string[];
    urls?: string[];
    curr_index?: number;
    home_url?: string;
    no_home?: "true" | "false";
    off_to_side?: ReactNode;
}

function Navbar({
    children,
    items = [],
    urls = [],
    curr_index = -2,
    home_url = "/",
    no_home = "false",
    off_to_side = null,
}: Props) {
    let home_nav_link_class = "nav-link";
    if (curr_index == -1) home_nav_link_class = home_nav_link_class + " active";
    let classes: (string | undefined)[] = [];
    for (let i = 0; i < items.length; i++) {
        if (i == curr_index) classes.push("nav-link active");
        else classes.push("nav-link");
    }
    let home_nav_item_class = "nav-item";
    if (no_home == "true")
        home_nav_item_class = home_nav_item_class + " visually-hidden";
    return (
        <>
            <nav
                className="navbar navbar-expand-lg bg-primary"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {children}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className={home_nav_item_class}>
                                <a
                                    className={home_nav_link_class}
                                    href={home_url}
                                >
                                    Home
                                </a>
                            </li>
                            {items.map((item, index) => (
                                <li className="nav-item">
                                    <a
                                        className={classes[index]}
                                        href={urls[index]}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex">{off_to_side}</div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
