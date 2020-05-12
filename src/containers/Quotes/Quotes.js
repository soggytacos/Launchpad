import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import QuoteList from './QuoteList/QuoteList';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            newQuote: {
                text: '',
                author: '',
                dateAdded: ''
            },
            selectedQuote: null,
        }
        this.handleAddQuote = this.handleAddQuote.bind(this);
        this.handleNewQuoteTextChange = this.handleNewQuoteTextChange.bind(this);
        this.handleNewQuoteAuthorChange = this.handleNewQuoteAuthorChange.bind(this);
    }

    handleAddQuote(e){
        e.preventDefault();
        const nQuote = {...this.state.newQuote};
        if (nQuote.text !== "") {
            nQuote.dateAdded = Date.now();
            const existingQuotes = [...this.state.quotes, nQuote];
            this.setState({
                quotes: existingQuotes,
                newQuote: {
                    text: '',
                    author: '',
                    dateAdded: ''
                }
            })
        }
        console.log(this.state);
    }


    handleNewQuoteTextChange(e) {
        this.setState({
            newQuote: {
                text: e.target.value,
                author: this.state.newQuote.author
            }
        });
    }

    handleNewQuoteAuthorChange(e) {
        this.setState({
            newQuote: {
                text: this.state.newQuote.text,
                author: e.target.value
            }
        });
    }

    refreshQuote = () => {
        const randomSelect = Math.floor(Math.random() * this.state.quotes.length);
        const selectedQuote = this.state.quotes[randomSelect];
        this.setState({
            ...this.state,
            selectedQuote: selectedQuote
        })
    }

    render() {

        return (
            <Aux>
                <h1>Quotes</h1>
                <QuoteList quotes={this.state.quotes} selectedQuote={this.state.selectedQuote} refreshQuote={this.refreshQuote}/>
                <div>
                    <form>
                        <TextField id="standard-basic" label="Quote" value={this.state.newQuote.text} onChange={this.handleNewQuoteTextChange}/>
                        <TextField id="standard-basic" label="Author" value={this.state.newQuote.author} onChange={this.handleNewQuoteAuthorChange}/>
                        <Button type="submit" onClick={this.handleAddQuote}>Add New Quote</Button>
                    </form>
                </div>
            </Aux>
        );
    }
}

export default Quotes;