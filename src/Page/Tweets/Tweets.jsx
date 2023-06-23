import React, { useEffect, useState } from 'react'
import * as css from './Tweets.styled';
import { useNavigate } from 'react-router-dom';
import { onGetTweets, onPutTweetsOff, onPutTweetsOn } from '../../Api/operations';
import pictureTop from '../../Img/pictureTop.png'
import logo from '../../Img/logo.svg'
import boy from '../../Img/boy.png'
import Dropdown from '../../Components/Dropdown/Dropdown';
import Skeleton from '@mui/material/Skeleton';


const Tweets = () => {
    const navigate = useNavigate();
    const [tweets, setTweets] = useState([]);
    const [value, setValue] = useState(6);
    const [isMore, setIsMore] = useState(true);
    const [isFollows, setIsFollows] = useState([]);
    const [tweetsFilter, setTweetsFilter] = useState([]);
    const [selectedOption, setSelectedOption] = useState('show all');


    useEffect(() => {
        if (!isFollows.length) {
            const storedData = localStorage.getItem('idFollow');
            if (storedData) {
                setIsFollows(JSON.parse(localStorage.getItem('idFollow')));
            }
        }
        const getTweets = async () => {
            const data = await onGetTweets();
            setTweetsFilter(data)
            setTweets(data?.slice(0, value))


            if (value >= data?.length) {
                setIsMore(false);
            }
        }

        getTweets();
    }, [value]);


    const onСhangeXValue = () => {
        setValue(prevState => prevState + 6)
    }

    const onFollowsOn = async (id) => {
        setIsFollows((prevState) => [...prevState, id]);
        await onPutTweetsOn(id);
    }

    const onFollowsOff = async (id) => {
        setIsFollows((prevState) => prevState.filter((followId) => followId !== id));
        await onPutTweetsOff(id);
    }


    const handleAll = () => {
        if (value >= tweetsFilter?.length) {
            setIsMore(false);
        } else {
            setIsMore(true);
        }
        setTweets(tweetsFilter.slice(0, value))
        setSelectedOption('show all');
    }


    const handleFollow = () => {
        const filteredData = tweetsFilter?.filter(item => !isFollows.includes(item.id));
        setTweets(filteredData)
        setIsMore(false);
        setSelectedOption('follow');
    }

    const handleFollowing = () => {
        const filteredData = tweetsFilter?.filter(item => isFollows.includes(item.id));
        setTweets(filteredData)
        setIsMore(false);
        setSelectedOption('followings');
    }






    return (
        <css.TweetsDiv>
            <css.TweetsNav>
                <css.TweetsBtnBack type='button' onClick={() => { navigate('/') }}>Go back</css.TweetsBtnBack>
                <Dropdown handleFollow={handleFollow} handleAll={handleAll} handleFollowing={handleFollowing} />
            </css.TweetsNav>
            <css.TweetUL>
                {tweets?.length === 0 ? (
                    tweets.length === 0 && selectedOption === 'followings' ? (
                        <css.TweetsNoFollowing>No 'following' cards.</css.TweetsNoFollowing>
                    ) : (<css.TweetUL>
                        <css.TweetLI><Skeleton animation="wave" /></css.TweetLI>
                        <css.TweetLI><Skeleton animation="wave" /></css.TweetLI>
                        <css.TweetLI><Skeleton animation="wave" /></css.TweetLI>
                        <css.TweetLI><Skeleton animation="wave" /></css.TweetLI>
                        <css.TweetLI><Skeleton animation="wave" /></css.TweetLI>
                        <css.TweetLI><Skeleton animation="wave" /></css.TweetLI>
                    </css.TweetUL>)
                ) : (
                    tweets?.map(({ id, avatar, followers, tweets, name }) => {
                        localStorage.setItem('idFollow', JSON.stringify(isFollows));
                        const isFollow = isFollows?.includes(id);

                        return (<css.TweetLI key={id}>
                            <css.TweetImgLogo src={logo} alt="Go It" />
                            <css.TweetImgTop src={pictureTop} alt="Go it" />
                            <css.TweetsRectangle></css.TweetsRectangle>
                            <css.TweetImgBoy src={boy} alt="Go it" />
                            <css.TweetImgAvatar src={avatar} alt={`Avatar - ${name}`} />
                            <css.TweetDivText>
                                <css.TweetDivTextTweets>{tweets} tweets</css.TweetDivTextTweets>
                                <css.TweetDivTextFollowers>{Number(followers).toLocaleString('en-US')} followers</css.TweetDivTextFollowers>
                            </css.TweetDivText>
                            {!isFollow ?
                                (<css.TweetButtonOn type='button' onClick={() => { onFollowsOn(id) }}>follow</css.TweetButtonOn>)
                                :
                                (<css.TweetButtonOff type='button' onClick={() => { onFollowsOff(id) }}>following</css.TweetButtonOff>)}
                        </css.TweetLI>)
                    })
                )}
            </css.TweetUL>
            {isMore ? <css.TweetsLoadMore type='button' onClick={onСhangeXValue}>Load More</css.TweetsLoadMore> : <></>}
        </css.TweetsDiv>
    )
}

export default Tweets