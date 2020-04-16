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
            },
        }
    }

    resetState() {
        this.setState({
            category: {
                categoryName: '',
                id: ''
            },
        });
    }

    handleCategoryChange = (e) => {
        let newCategory = this.state.category;
        newCategory.categoryName = e.target.value;
        this.setState({
            category: newCategory
        })
    }

    saveCategory = () => {
        let newCategory = this.state.category;
        newCategory.id = Date.now();
        this.setState({
            category: newCategory
        })
        this.props.onSaveNewCategory(this.state.category)
        this.resetState();
        this.props.toggleAddCategory()
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
                            value={this.state.category.categoryName || ''}
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