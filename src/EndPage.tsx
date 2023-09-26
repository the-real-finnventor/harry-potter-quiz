import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";

function EndPage() {
    const correct = Number(Cookies.get("correct"));
    const questions = Number(Cookies.get("question"));
    return (
        <>
            <Navbar no_home="true">Harry Potter Quiz</Navbar>
            <br />
            <div className="container">
                <h1>You finished!</h1>
                <p>
                    You got {correct} out of {questions - 1} correct! (
                    {(correct / (questions - 1)) * 100}%)
                </p>
                <br />
                <Button
                    onClick={() => {
                        location.href = "/";
                    }}
                >
                    Go back to home
                </Button>
            </div>
        </>
    );
}

export default EndPage;
