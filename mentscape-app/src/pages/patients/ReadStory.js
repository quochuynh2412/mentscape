import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "../../components/Header";
import { ReadStoryItem } from "./ReadStoryItem";
import { useState, useEffect } from "react";
import { getStory } from "../../firebase/story";
import { getUserInfo } from "../../firebase/user";

const story_settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export const ReadStory = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        const loadStory = async () => {
            const results = await getStory();
            setStories(results);
        }
        loadStory();
    }, []);

  return (
    <>
        <Header />
        <div className="story_section">
            <h2 className="mb-3 fw-bold">Deepest Stories</h2>
            <Slider {...story_settings}>
                {stories.map(story => <ReadStoryItem {...story} key={story.id}/>)}
            </Slider>
        </div>

    </>
  )
}
