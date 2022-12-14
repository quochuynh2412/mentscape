import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
function QuizzModal(props) {
    var b = "#99cc33";
    var t = "#000000";
    const changeColor = () => {
        if (props.score <= (3*8/2)) {
            b = "#cc3300";
            t = "#FFFFFF";
        }
    }
    const story_settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
    }
    const mystyle = {
        color: t,
        backgroundColor: b,
    };
    changeColor();
    var depression = "Your answers suggest you are suffering from high depression. It is important that you schedule an appointment with your doctor or a mental health worker now.";
    var ok = "Your answers suggest you are suffering from minimal depression. Consider watchful waiting, and testing again normally within two weeks. Still if you don't feel quite right, we recommend you schedule an appointment with your doctor. If you need help finding a mental health professional";

    return (
        <>
        <div className="mt-5 quizzes-modal">
            <div
                style={{ height: "100%", width: "70%" }}
                className="mt-2 mx-auto p-2 rounded-2 text-black bg-light container-fluid card modal-card"
            >
                <div style={mystyle} className= "rounded-2 card-header">
                    <h4 className="card-title text-lg-center">Your Mental Health's Status:
                        <p className="mt-1 card-title">{props.score <= (3*8/2) ? "High Depression!" : "Minimal Depression!"}</p>
                    </h4>
                </div>

                <div className="card-body text-lg-start">
                    <p>{props.score >= (3*8/2) ? ok : depression}</p>
                </div>

                <div className="card-body text-lg-start">
                    <h5>Your Advice:</h5>
                    <p>Put to sleep the negative thoughts of the past so that goodness can prevail!</p>
                    <p>It can be tricky to bring it up, but if you’re worried about saying the wrong thing, don’t be. The best way to start is to just ask them if they’re okay.</p>
                </div>


                {/*<div className="content">*/}
                    <div className="story_section" >
                        <h4 className="mb-3 fw-bold text-center">Recommended Podcasts For You:</h4>
                        <Slider {...story_settings}>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/5vwIdOiYyMu63ZMrFs37Nv?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/6Mu9PoPoFlf4lhJLTr5ODQ?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/5eWiZnDe6zob1QdkbyMwwo?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/1CQsuvKamV0ykq5pnrko2p?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/3fNCgWGsnoSEnIpLtsfHGV?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/6lWh5F3AFQ7uqZWMKlzKba?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <iframe style={{ borderRadius: 22 + 'px' }} src="https://open.spotify.com/embed/episode/3pDYWgf9Nw3FblPqFxD1yy?utm_source=generator" width="200" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </Slider>
                    </div>
                {/*</div>*/}

                <div className="row justify-content-center card-footer">
                    <button onClick={() => props.restart()} className="w-50 mx-auto rounded-pill btn btn-secondary">Do quizzes again</button>
                    <Link className="w-50 mx-auto rounded-pill btn btn-primary" to="/appointment">Go to the Appointment page!</Link>
                </div>


            </div>
        </div>

        </>
    );
}

export default QuizzModal;