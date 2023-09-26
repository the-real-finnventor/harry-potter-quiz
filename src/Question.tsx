import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState, useEffect, useRef } from "react";
import Alert from "./components/Alert";
import Cookies from "js-cookie";

interface Props {
    intenedDificulty: number;
    intenedQuestionNum: number;
    setCookie: (name: any, value: any, options?: any | undefined) => void;
    correctIndex: number;
    answers: string[];
    question: string;
    answerTime?: number;
}

function Question({
    setCookie,
    intenedQuestionNum,
    answers,
    question,
    correctIndex,
    intenedDificulty,
    answerTime = 30,
}: Props) {
    const dificulty = Number(Cookies.get("dificulty"));
    const correct = Number(Cookies.get("correct"));
    if (dificulty != intenedDificulty) {
        location.href = "/";
    } else if (String(intenedQuestionNum) == Cookies.get("question")) {
        location.href = "/";
    }

    const difs = ["easy", "medium", "hard"];

    const [selectedIndex, updateSelectedIndex] = useState(-1);

    const [alertHidden, updateAlertHidden] = useState(true);

    function check(overide = false) {
        location.href = String(selectedIndex);
        if (selectedIndex == -1 && overide == false) {
            updateAlertHidden(false);
        } else if (selectedIndex == correctIndex) {
            setCookie("correct", correct + 1);
            setCookie("question", intenedQuestionNum + 2);
            location.href = `/${difs[dificulty]}${intenedQuestionNum + 2}`;
        } else {
            setCookie("question", intenedQuestionNum + 2);
            location.href = `/${difs[dificulty]}${intenedQuestionNum + 2}`;
        }
    }

    const Ref = useRef(null);
    const [timer, setTimer] = useState(`00:00:${answerTime}`);

    const getTimeRemaining = (e: string) => {
        const total = Date.parse(e) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: string) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                    ":" +
                    (minutes > 9 ? minutes : "0" + minutes) +
                    ":" +
                    (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    const clearTimer = (e: string | Date) => {
        setTimer(`00:00:${answerTime}`);
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(String(e));
        }, 1000);
        Ref.current = id as any;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + answerTime);
        return deadline;
    };
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    const onClickReset = () => {
        clearTimer(getDeadTime());
    };
    if (timer == "00:00:00") {
        check(true);
    }
    return (
        <>
            <Navbar
                no_home="true"
                off_to_side={
                    <p className="text-light my-sm-0">
                        {timer} {correct}/{intenedQuestionNum}
                    </p>
                }
            >
                Harry Potter Quiz
            </Navbar>
            <br />
            <div className="container">
                <h1>Question {intenedQuestionNum + 1}</h1>
                <Alert hidden={alertHidden}>You must select an answer.</Alert>
                <ListGroup items={answers} onSelectItem={updateSelectedIndex}>
                    {question}
                </ListGroup>
                <br />
                <Button onClick={check}>Check</Button>
            </div>
        </>
    );
}

export default Question;
