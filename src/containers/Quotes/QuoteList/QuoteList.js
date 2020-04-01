import React from 'react';

const quoteList = (props) => {
    const quotes = props.quotes;
    let listOfQuotes = quotes.map(quote => (
        <div key={quote.dateAdded}>
            <h3>{quote.text}</h3>
            <h4>{quote.author}</h4>
        </div>
    ));

    return (
        <div>{listOfQuotes}</div>
    );
};

export default quoteList;