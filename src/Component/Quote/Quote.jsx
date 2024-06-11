import React, {useContext} from 'react';
import {GlobalContext} from "../../Context/Index.jsx";
import './Quote.css'

const Quote = () => {
    const {handleButtonClick,quote,author} = useContext(GlobalContext);

    return (
        <div className={'container'}>
            <div className={'quote'}>
                {quote}
            </div>
            <div className={"author"}>
                {author}
            </div>
            <button className={'button'} onClick={handleButtonClick}>Next</button>
        </div>
    );
};

export default Quote;
