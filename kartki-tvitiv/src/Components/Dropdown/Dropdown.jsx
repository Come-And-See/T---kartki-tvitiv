import React, { useState } from 'react';
import * as css from './Dropdown.styled';

const Dropdown = ({ tweets, isFollows }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = option => {
        setSelectedOption(option);
        setIsOpen(false);
    };



    const handleAll = (option) => {
        handleOptionClick(option)
    }

    const handleFollow = (option) => {
        handleOptionClick(option)

        tweets.filter((id, isFollows) => {id !== isFollows})
        console.log("isFollows:", isFollows)
        console.log("tweets:", tweets)
        

    }
    const handleFollowing = (option) => {
        handleOptionClick(option)
    }

    return (
        <css.DropdownDiv>
            <css.DropdownButton onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || 'Select an option'}
            </css.DropdownButton>
            <css.DropdownBlock open={isOpen}>
                <css.DropdownOption onClick={() => handleAll('show all')}>show all</css.DropdownOption>
                <css.DropdownOption onClick={() => handleFollow('follow')}>follow</css.DropdownOption>
                <css.DropdownOption onClick={() => handleFollowing('followings')}>followings</css.DropdownOption>
            </css.DropdownBlock>
        </css.DropdownDiv>
    );
};

export default Dropdown;