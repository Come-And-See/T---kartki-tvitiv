import React, { useState } from 'react';
import * as css from './Dropdown.styled';

const Dropdown = ({ handleFollow, handleAll, handleFollowing }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = option => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    return (
        <css.DropdownDiv>
            <css.DropdownButton onClick={() => setIsOpen(!isOpen)}>
                {selectedOption || 'Select an option'}
            </css.DropdownButton>
            <css.DropdownBlock open={isOpen}>
                <css.DropdownOption onClick={() => { handleOptionClick('show all'), handleAll() }}>show all</css.DropdownOption>
                <css.DropdownOption onClick={() => { handleOptionClick('follow'), handleFollow() }}>follow</css.DropdownOption>
                <css.DropdownOption onClick={() => { handleOptionClick('followings'), handleFollowing() }}>followings</css.DropdownOption>
            </css.DropdownBlock>
        </css.DropdownDiv>
    );
};

export default Dropdown;