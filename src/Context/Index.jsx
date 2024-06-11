import React, {createContext, useContext, useEffect, useState} from 'react';

export const GlobalContext = createContext(null);

function GlobalState({children}) {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');

    async function handleButtonClick() {
        try {
            const response = await fetch('https://api.quotable.io/random')
            const data = await response.json();
            if (data) {
                setQuote(data.content)
                setAuthor(data.author)
            } else {
                setError("Something went Wrong!!!")
            }
        } catch (e) {

            console.log(e)
        }
    }

    useEffect(() => {
        handleButtonClick()
    }, []);

    return (
        <GlobalContext.Provider value={{quote,author,error,handleButtonClick}}>
            {children}
        </GlobalContext.Provider>


    );
}

export default GlobalState;