import React from 'react'
import reactLogo from './svg/react.svg'
import viteLogo from './svg/vite.svg'
import * as css from './Home.styled';

const Home = () => {
    return (
        <css.HomeDiv>
            <div>
                <a href="#" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="#" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
        </css.HomeDiv>
    )
}

export default Home