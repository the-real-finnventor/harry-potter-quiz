import EndPage from "./EndPage";
import Home from "./Home";
import Question from "./Question";
import { CookiesProvider, useCookies } from "react-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [cookies, setCookie] = useCookies([
        "dificulty",
        "question",
        "correct",
    ]);
    const easy_questions = [
        "From which platform at Kings Cross does the Hogwarts Express (the train that takes kids to Hogwarts) depart from?",
        "Harry (Potter) has a scar on his forehead. What shape is it?",
        "In her second year, Hermione drank polyjuice potion that gave her lasting rat like features.",
        "Sirius Black was sorted into Slytherin house.",
    ];
    const medium_questions = [
        "Hermione's parents are muggles. What job do they do?",
        "How do the Durslys say Harry's parents died?",
        "How old was Tom Riddle when he opened the chamber of secrets?",
        "In which year did Harry go on his first date with Cho Chang?",
    ];
    const hard_questions = [
        "What are the names of Severus Snape's parents?",
        "What is the name of the Quidditch move where a seeker fake's seeing the snitch and dives to the ground but pulls out of the dive just in time, but the opposing seeker plummets to the ground?",
        "What is the first-ever password to Gryffindor Tower? (In the books)",
        "What is Luna's Patronus?",
    ];
    const easy_posible_answers = [
        ["A. Gringotts", "B. wand", "C. 9 3/4", "D. The trolls club"],
        [
            "A. Like a pig tail",
            "B. Like a lightning bolt",
            "C. Like a shining star",
            "D. Like an egg",
        ],
        ["A. True statement", "B. False statement"],
        ["A. True statement", "B. False statement"],
    ];
    const medium_posible_answers = [
        ["A. Physician", "B. Tailor", "C. Dentist", "D. Mecanic"],
        [
            "A. In a car crash",
            "B. In an aeroplane crash",
            "C. By cancer",
            "D. By heart attack",
        ],
        ["A. 15", "B. 16", "C. 17", "D. 18"],
        ["A. 2", "B. 3", "C. 4", "D. 5"],
    ];
    const hard_posible_answers = [
        [
            "A. Toby Snape and Elly Priest",
            "B. Tobias Snape and Ellen Prince",
            "C. Tobias Snape And Eileen Prince",
            "D. Tony Snape and Eileen Prince",
        ],
        [
            "A. Wonky Fent",
            "B. Wonky Faint",
            "C. Wronsky Feint",
            "D. Wronsky Faint",
        ],
        ["A. Fortuna Major", "B. Caput Draconis", "C. Baubles", "D. Pig Snout"],
        ["A. An otter", "B. A lynx", "C. A horse", "D. A hare"],
    ];
    const easy_answers_index = [2, 1, 1, 1];
    const medium_answers_index = [2, 0, 1, 3];
    const hard_answers_index = [2, 2, 1, 3];
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home setCookie={setCookie} />} />
                {easy_questions.map((question, index) => (
                    <Route
                        path={`/easy${index + 1}`}
                        element={
                            <Question
                                intenedQuestionNum={index}
                                setCookie={setCookie}
                                question={question}
                                answers={easy_posible_answers[index]}
                                correctIndex={easy_answers_index[index]}
                                intenedDificulty={0}
                                answerTime={20}
                            />
                        }
                    />
                ))}
                <Route
                    path={`easy${easy_questions.length + 1}`}
                    element={<EndPage />}
                />
                <Route
                    path={`medium${easy_questions.length + 1}`}
                    element={<EndPage />}
                />
                <Route
                    path={`hard${easy_questions.length + 1}`}
                    element={<EndPage />}
                />
                {medium_questions.map((question, index) => (
                    <Route
                        path={`/medium${index + 1}`}
                        element={
                            <Question
                                intenedQuestionNum={index}
                                setCookie={setCookie}
                                question={question}
                                answers={medium_posible_answers[index]}
                                correctIndex={medium_answers_index[index]}
                                intenedDificulty={1}
                                answerTime={10}
                            />
                        }
                    />
                ))}
                {hard_questions.map((question, index) => (
                    <Route
                        path={`/hard${index + 1}`}
                        element={
                            <Question
                                intenedQuestionNum={index}
                                setCookie={setCookie}
                                question={question}
                                answers={hard_posible_answers[index]}
                                correctIndex={hard_answers_index[index]}
                                intenedDificulty={2}
                                answerTime={5}
                            />
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
