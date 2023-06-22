import React from 'react'
import * as css from './NavLinks.styled';

const NavLinks = () => {
    return (
        <css.NavDiv>
            <css.NavLinks to='/'>Home</css.NavLinks>
            <css.NavLinks to='/tweets'>Tweets</css.NavLinks>
        </css.NavDiv>
    )
}

export default NavLinks