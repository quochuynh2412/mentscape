import { useState } from "react";
import QuizzModal from "./QuizzModal";
import questions from "./Questions.json";
import { Header } from "../../components/Header";
function Quizzes() {
    const [showFinalResult, setFinalResult] = useState(true);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionsNumber] = useState(0);

    const optionClicked = (point) => {
        setScore(score + point);
        if (questionNumber + 1 < questions.length) {
            setQuestionsNumber(questionNumber + 1);
        } else {
            setFinalResult(false);
        }
    }

    const restart = () => {
        setScore(0);
        setQuestionsNumber(0);
        setFinalResult(true);
    }
    return (
        <>  
            <Header />
            <div className="content">
            <h2 className="mt-5 text-center">Mental Health Tests, Quizzes, Self-Assessments:</h2>
            <h3 className="mt-3 text-center">How Happy Are You?</h3>
            {showFinalResult ? (
                <div className=" mt-4 mx-auto p-2 w-50 rounded-3 bg-light text-dark card questions-card">
                    <div style={{ color: "#491f45" }} className="card-header">
                        <h4 className="mb-3 card-title">Question {questionNumber + 1} : {questions[questionNumber].text}</h4>
                    </div>

                    <div className="card-body">
                        <ul className="list-unstyled d-flex align-items-center flex-column">
                            {questions[questionNumber].options.map((answers) => {
                                return (
                                    <li
                                        onClick={() => optionClicked(answers.point)}
                                        key={answers.id}
                                        style={{ width: "85%", height: "auto" }}
                                        className="mb-1 mx-auto p-2 rounded-pill text- text-lg-center btn btn-light border-primary btn-lg"
                                    >
                                        {answers.ans}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            ) : (
                <QuizzModal restart={restart} score={score} />
            )}
            </div>
        </>
    );
}

export default Quizzes;