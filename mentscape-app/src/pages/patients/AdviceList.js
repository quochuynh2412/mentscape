import React from 'react'
import { Header } from '../../components/Header';
import Advice from './Advice';
import { getCurrentUser } from '../../firebase/authFunc';
import { getStory } from '../../firebase/myStory';
import { useState, useEffect } from 'react';
import { getCurrentUserInfo } from '../../firebase/user';

export const AdviceList = () => {

    const [stories, setStories] = useState([]);
    useEffect(() => {
        const loadStory = async (userID) => {
            const results = await getStory(userID);
            setStories(results);
        }
        loadStory(getCurrentUser().id);
    }, []);
    // console.log(stories);
  return (
      <>
          <Header />
          <div>
              {stories.map(story => <Advice {...story} />)}
          </div>
      </>
  )
}
