import React, {Component} from 'react';
import Textarea from 'react-textarea-autosize';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class Paragraph extends Component {

    state = {
        text: ''
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value,
        })
    };

    render() {

        return (
            <div>
                <Textarea
                    autoFocus
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: 'none',
                        width: '100%',
                        outline: 'none',
                        borderStyle: 'groove',
                        borderColor: '#5aac44',
                        borderRadius: '5px',
                        overflow: 'hidden'
                    }}
                />
                <div>
                    <Button
                        // onMouseDown={}
                        varient="contained"
                        style={{color: 'white', backgroundColor: '#5aac44'}}
                    >
                        {"Submit Answer"}
                    </Button>
                </div>
            </div>
        );
    }
}


export default Paragraph;