import { useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Select from "./components/Select";

interface Props {
    setCookie: (name: any, value: any, options?: any | undefined) => void;
}

function Home({ setCookie }: Props) {
    setCookie("question", 1);
    setCookie("correct", 0);
    function pickDificuly() {
        const dificulty = document.getElementById(
            "dificulty"
        )! as HTMLSelectElement;
        setCookie("dificulty", dificulty.selectedIndex, {
            path: "/",
        });
        if (dificulty.selectedIndex == 0) {
            location.href = "/easy1";
        } else if (dificulty.selectedIndex == 1) {
            location.href = "/medium1";
        } else {
            location.href = "hard1";
        }
    }

    return (
        <>
            <Navbar no_home="true">Harry Potter Quiz</Navbar>
            <br />
            <div className="container">
                <h1>Welcome to the Harry Potter Quiz!</h1>
                <h2>Please select your dificulty:</h2>
                <br />
                <Select
                    item_names={[
                        "Easy (If you get one wrong, you need to reread the harry potter series)",
                        "Medium (Really easy)",
                        "Hard (Not really)",
                    ]}
                    item_values={["hi", "test", "this is"]}
                    dropdown_id="dificulty"
                    dropdown_name="dificulty"
                />
                <br />
                <br />
                <Button onClick={pickDificuly}>Start</Button>
            </div>
        </>
    );
}

export default Home;
