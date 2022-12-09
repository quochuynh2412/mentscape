import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "../../components/Header";
import { StoryItem } from "./StoryItem";

const story_settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export const ReadStory = () => {
  return (
    <>
    <Header />

    <div className="content">
        <div className="story_section">
            <h2 className="mb-3 fw-bold">Deepest Stories</h2>
            <Slider {...story_settings}>
                <StoryItem img="/img/story_ava/ava1.png"/>
                <StoryItem img="/img/story_ava/ava2.png" />
                <StoryItem img="/img/story_ava/ava3.png" />
                <StoryItem img="/img/story_ava/ava4.png" />
            </Slider>
        </div>
    </div>

    </>
  )
}
