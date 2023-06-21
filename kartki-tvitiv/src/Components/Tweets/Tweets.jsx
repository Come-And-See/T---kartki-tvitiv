import React, { useEffect } from 'react'
import * as css from './Tweets.styled';
import { useNavigate } from 'react-router-dom';
import { onGetTweets } from '../../Api/operations';

const Tweets = () => {
    const navigate = useNavigate();

    useEffect(() => {
        
        onGetTweets();
       
    }, []);


  return (
      <css.TweetsDiv>
          <css.TweetsBtnBack type='button' onClick={() => { navigate('/') }}>Go back</css.TweetsBtnBack>


      </css.TweetsDiv>
  )
}

export default Tweets