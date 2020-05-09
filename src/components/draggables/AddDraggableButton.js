import React, {Component} from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Textarea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import {connect} from 'react-redux';
import {addList, addCard} from '../../actions';
import InputLabel from "@material-ui/core/InputLabel";

class AddDraggableButton extends Component {

    state = {
        formOpen: false,
        text: '',
        habit: {
            habitPrompt: '',
            selectedAnswerType: '',
        },
        answerType: {
            options: [
                {value: 'short', displayValue: 'Short Answer'},
                {value: 'paragraph', displayValue: 'Paragraph'},
                {value: 'duration', displayValue: 'Duration'},
                {value: 'checkbox', displayValue: 'Checkbox'},
                {value: 'radioFive', displayValue: 'Scale of 1 to 5'},
                {value: 'radioTen', displayValue: 'Scale of 1 to 10'},
                {value: 'number', displayValue: 'Number'},
            ]
        },
    }

    openForm = () => {
        this.setState({
            ...this.state,
            formOpen: true,
            text: '',
        })
    };

    closeForm = (e) => {
        this.setState({
            ...this.state,
            formOpen: false,
            text: '',
            habit: {
                habitPrompt: '',
                selectedAnswerType: '',
            },
        })
    };

    handleInputChange = e => {
        this.setState({
            ...this.state,
            text: e.target.value,
            habit: {
                ...this.state.habit
            }
        })
    };

    handleAnswerTypeChange = (ev) => {
        let selectedAnswer = ev.target.value;
        this.setState({
            ...this.state,
            habit: {
                ...this.state.habit,
                selectedAnswerType: selectedAnswer
            }
        })
    }

    handleAddList = () => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState({
                formOpen: false,
                text: ''
            })
            dispatch(addList(text))
        }
        return;
    };

    handleAddCard = () => {
        const {dispatch, listID} = this.props;
        let habit = {...this.state.habit};
        habit.habitPrompt = this.state.text;

        if (habit.habitPrompt) {
            this.setState({
                ...this.state,
                text: '',
                habit: {
                    habitPrompt: '',
                    selectedAnswerType: '',
                }
            })
            dispatch(addCard(listID, habit))
        }
        this.closeForm()
        return;
    }

    renderAddButton = () => {
        const {list} = this.props;

        const buttonText = list ? 'Add another list' : 'Add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {
        const {list} = this.props;
        const placeholder = list ? 'Enter list title' : 'Enter card title';

        const buttonTitle = list ? 'Add List' : 'Add Card';

        const answerTypes = [];
        for (let key in this.state.answerType.options) {
            answerTypes.push({
                id: key,
                value: this.state.answerType.options[key].value,
                displayValue: this.state.answerType.options[key].displayValue
            })
        }
        let answerTypeDropDown = (
            <FormControl style={{width: "150px"}}>
                <InputLabel>Answer Type</InputLabel>
                <Select labelId="label" id="select" value={this.state.habit.selectedAnswerType}
                        onChange={this.handleAnswerTypeChange}>
                    {answerTypes.map(element => (
                        <MenuItem key={element.id} value={element.value}>{element.displayValue}</MenuItem>
                    ))
                    }
                </Select>
            </FormControl>
                )

        return (
            <div>
                <Card style={{
                    overflow: 'visible',
                    minHeight: 80,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <Textarea
                        placeholder={placeholder}
                        autoFocus
                        // onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                            overflow: 'hidden'
                        }}
                    />
                        {list ? null : answerTypeDropDown}
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button
                        onMouseDown={list ? this.handleAddList : this.handleAddCard}
                        varient="contained"
                        style={{color: 'white', backgroundColor: '#5aac44'}}
                    >
                        {buttonTitle}
                    </Button>
                    <Icon style={{marginLeft: 8, cursor: 'pointer'}}>close</Icon>
                </div>
            </div>
        );
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center'
    }
}

export default connect()(AddDraggableButton);