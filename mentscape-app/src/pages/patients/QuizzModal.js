function QuizzModal(props) {
    var a = "bg-success";
    const changeColor = () => {
        if (props.score <= 5) {
            a = "bg-danger";
        }

    }
    changeColor();

    return (
        <div className="mt-5 quizzes-modal">
            <div
                style={{ height: "100%", width: "65%" }}
                className="mt-2 mx-auto p-2 rounded-2 text-black bg-light container-fluid card modal-card"
            >
                <div style={{ color: "#491f45" }} className= {"rounded-2 card-header " + a}>
                    <h4 className="card-title">Your Mental Health's Status:
                        <p className="mt-1 card-title">{props.score <= 5 ? "High Depression!" : "You are oke!"}</p>
                    </h4>
                </div>

                <div className="card-body text-lg-start">
                    <p>{props.score >= 5 ? "You should do this..." : "abvbhabkbbjrbbvdf"}</p>
                </div>

                <div className="row justify-content-center card-footer">
                    <button onClick={() => props.restart()} className="m-2 col-sm-3 rounded-pill btn btn-secondary">Do quizzes again</button>                     
                    <a className="m-2 col-sm-3 rounded-pill btn btn-primary" href="b.js">Go to the Appointment page!</a>
                </div>

            </div>
        </div>
    );
}

export default QuizzModal;