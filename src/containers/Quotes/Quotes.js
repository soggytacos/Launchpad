import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            newQuote: {
                text: '',
                author: '',
                dateAdded: ''
            }
        }
        this.handleAddQuote = this.handleAddQuote.bind(this);
        this.handleNewQuoteTextChange = this.handleNewQuoteTextChange.bind(this);
        this.handleNewQuoteAuthorChange = this.handleNewQuoteAuthorChange.bind(this);
    }

    handleAddQuote = () => {
        const nQuote = {...this.state.newQuote};
        if (nQuote.text !== "") {
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

    render() {
        return (
            <Aux>
                <h1>Quotes</h1>
                <div>
                    <form>
                        <input type="text" value={this.state.newQuote.text} onChange={this.handleNewQuoteTextChange}/>
                        <input type="text" value={this.state.newQuote.author} onChange={this.handleNewQuoteAuthorChange}/>
                        <button type="submit" onClick={this.handleAddQuote}>Add New Quote</button>
                    </form>

                </div>
                <h2>{this.state.quotes}</h2>
            </Aux>
        );
    }
}

export default Quotes;