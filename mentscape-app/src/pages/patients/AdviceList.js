import React from 'react'
import { Header } from '../../components/Header';
import Advice from './Advice';

export const AdviceList = () => {
    const sharings = [
        "Lorem ispum..,....",
        "I feel down and lonely what should i do",
        "I feel down and lonely what should i do",
    ];
  return (
      <>
          <Header />
          <div>
              {sharings.map(sharing => <Advice story={"I feel down and lonely what should i do"}/>)}
          </div>
      </>
  )
}
