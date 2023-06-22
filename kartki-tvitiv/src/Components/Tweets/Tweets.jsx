import React, { useEffect, useState } from 'react'
import * as css from './Tweets.styled';
import { useNavigate } from 'react-router-dom';
import { onGetTweets, onPutTweetsOff, onPutTweetsOn } from '../../Api/operations';
import pictureTop from '../../Img/pictureTop.png'
import rectangle from '../../Img/rectangle.png'
import logo from '../../Img/logo.png'
import boy from '../../Img/boy.png'


const Tweets = () => {
    const navigate = useNavigate();
    const [tweets, setTweets] = useState([]);
    const [value, setValue] = useState(6);
    const [isMore, setIsMore] = useState(true);

    const [isFollows, setIsFollows] = useState([]);



    useEffect(() => {
        const getTweets = async () => {
            const data = await onGetTweets();
            setTweets(data?.slice(0, value))

            if (value >= data?.length) {
                setIsMore(false);
            }
        }
        getTweets();

    }, [value, isFollows]);


    const onСhangeXValue = () => {
        setValue(prevState => prevState + 6)
    }

    const onFollowsOn = async (id) => {
        await onPutTweetsOn(id)
        setIsFollows((prev) => [...prev, id]);
    }

    const onFollowsOff = async (id) => {
        await onPutTweetsOff(id)
        setIsFollows((prev) => prev.filter((followId) => followId !== id));
    }

    return (
        <css.TweetsDiv>
            <css.TweetsBtnBack type='button' onClick={() => { navigate('/') }}>Go back</css.TweetsBtnBack>
            <css.TweetUL>
                {tweets.map(({ id, avatar, followers, tweets }) => {
                    const isFollow = isFollows.includes(id);
                    
                    return (<css.TweetLI key={id}>
                        <css.TweetImgLogo src={logo} alt="" />
                        <css.TweetImgTop src={pictureTop} alt="" />
                        <img src={rectangle} alt="" />
                        <css.TweetImgBoy src={boy} alt="" />
                        <css.TweetImgAvatar src={avatar} alt="" />
                        <css.TweetDivText>
                            <css.TweetDivTextTweets>{tweets} tweets</css.TweetDivTextTweets>
                            <css.TweetDivTextFollowers>{Number(followers).toLocaleString('en-US')} followers</css.TweetDivTextFollowers>
                        </css.TweetDivText>
                        {!isFollow ?
                            (<css.TweetButtonOn type='button' onClick={() => { onFollowsOn(id) }}>follow</css.TweetButtonOn>)
                            :
                            (<css.TweetButtonOff type='button' onClick={() => { onFollowsOff(id) }}>following</css.TweetButtonOff>)}
                    </css.TweetLI>)
                })}
            </css.TweetUL>
            {isMore ? <css.TweetsLoadMore type='button' onClick={onСhangeXValue}>Load More</css.TweetsLoadMore> : <></>}
        </css.TweetsDiv>
    )
}

export default Tweets