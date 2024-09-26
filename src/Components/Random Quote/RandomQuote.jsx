import React, { useEffect, useState } from 'react';
import './randomquote.css';

const RandomQuote = () => {
    const [quotes, setQuotes] = useState([]);
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

    // Function to get random quote
    const random = () => {
        if(quotes.length > 0){
            const select = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(select);
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