import React, { useEffect, useState } from 'react';
import './randomquote.css';

const RandomQuote = () => {
    // This holds array of multiple quotes (all quotes)
    const [quotes, setQuotes] = useState([]);

    // This holds single quote object that is currentlt being displayed
    // when random quote is selected, this state updated to reflect new quote
    const [quote, setQuote] = useState({
        quote: 'Difficulties increase the nearer we get to the goal.',
        author: 'Johann Wolfgang von Goethe',
    });
    

    useEffect(() => {
        const loadQuotes = async () => {
            try{
                const response = await fetch('https://dummyjson.com/quotes');
                const data = await response.json();
                // console.log(data)
                setQuotes(data.quotes);  //correctly set the quotes array
            }catch(error){
                console.error('Failed to fetch quotes', error);
            }
        };
        loadQuotes();
    },[]);

    // Function to get random quote from the quotes array if it contains any quotes (quotes.length > 0)
    const random = () => {
        if(quotes.length > 0){
            // generate the random index based on the length of the quotes array
            const select = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(select);
            // updates the quote state with the selected quote object, which changes the displayed quote.
        }
    }

    
    return (
        <div className='container'>
            <div className="quote">{quote.quote}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">{quote.author}</div>
                    <div className='next' onClick={random}>Next Quote</div>
                </div>
            </div>
        </div>
    )
}

export default RandomQuote;