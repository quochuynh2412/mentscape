import { useState } from "react";
import QuizzModal from "./QuizzModal";
import questions from "./Questions.json";
import { Header } from "../../components/Header";
function Quizzes() {
    const [showFinalResult, setFinalResult] = useState(true);
    const [score, setScore] = useState(0);
    const [questionNumber, setQuestionsNumber] = useState(0);
    // const questions = [
    //     {
    //         text: "Little interest or pleasure in doing things",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },

    //     {
    //         text: "Feeling down, depressed, or hopeless ",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },

    //     {
    //         text: "Trouble falling or staying asleep, or sleeping too much",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },

    //     {
    //         text: "Feeling tired or having little energy",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },

    //     {
    //         text: "Poor appetite or overeating",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },

    //     {
    //         text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },

    //     {
    //         text: "Trouble concentrating on things, such as reading the newspaper or watching television",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },
    //     {
    //         text: "Moving or speaking so slowly that other people could have noticed",
    //         options: [
    //             {
    //                 id: 1,
    //                 ans: "Not at all",
    //                 point: 3,
    //             },
    //             {
    //                 id: 2,
    //                 ans: "Several days",
    //                 point: 2,
    //             },
    //             {
    //                 id: 3,
    //                 ans: "More than half of the days",
    //                 point: 1,
    //             },
    //             {
    //                 id: 4,
    //                 ans: "Nearly every day",
    //                 point: 0,
    //             },
    //         ],
    //     },
    // ];

    const optionClicked = (point) => {
        setScore(score + point);
        if (questionNumber + 1 < questions.length) {
            setQuestionsNumber(questionNumber + 1);
        } else {
            setFinalResult(false);
        }
    }
    // const optionClickedNext = () => {
    //     if (questionNumber > 0) {
    //         setQuestionsNumber(questionNumber - 1);
    //     }else{
    //         setQuestionsNumber(0);
    //     }
    // }
    // const optionClickedPreviuos = () => {
    //     if (questionNumber + 1 < questions.length) {
    //         setQuestionsNumber(questionNumber + 1);
    //     }else{
    //         setQuestionsNumber(questions.length -1);
    //     }
    // }

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
                        <ul className="list-unstyled">
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