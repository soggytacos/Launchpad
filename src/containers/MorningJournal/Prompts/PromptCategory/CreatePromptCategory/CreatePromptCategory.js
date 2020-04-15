import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from "@material-ui/core/DialogActions";
import React, {Component} from "react";

class CreatePromptCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: {
                categoryName: '',
                id: ''
            }
        }
    }

    handleCategoryChange = (cat) => {
        let newCategoryName = cat.target.value;
        this.setState({
            category: {
                categoryName: newCategoryName
            }
        })
    }

    saveCategory = () => {
        this.setState({
            category: {
                id: Date.now()
            }
        })
        this.props.onSaveNewCategory(this.state.category)
        this.props.toggleAddCategory()
        console.log(this.state, "createCategory")
    }

    render() {
        return (

            <Dialog
                open={this.props.open}
                onClose={this.props.toggleAddCategory}
                disableEnforceFocus
                disableBackdropClick
                scroll={'body'}
                maxWidth={"lg"}
                fullWidth >

                {
                    <div>
                        <h1>Create A Prompt Category</h1>
                        <textarea
                            style={{fontSize: "large", width: '100%', height: 250, marginTop: 10}}
                            value={this.state.categoryName || ''}
                            onChange={(ev) => {this.handleCategoryChange(ev)}}
                        />
                        <DialogActions>
                            <Button style={{marginRight: '10px'}} onClick={this.saveCategory} variant='contained'
                                    color='primary'>Save</Button>
                            <Button onClick={this.props.toggleAddCategory} variant='contained' color='primary'>Cancel</Button>
                        </DialogActions>
                    </div>
                }
            </Dialog>
        )
    }
}

export default CreatePromptCategory;