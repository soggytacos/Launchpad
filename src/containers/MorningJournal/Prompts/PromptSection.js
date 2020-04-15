import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button  from "@material-ui/core/Button";
import CreatePromptCategory from "./PromptCategory/CreatePromptCategory/CreatePromptCategory";
import PromptCategory from "./PromptCategory/PromptCategory";

class Prompts extends Component {

    state = {
        addingCategory: false,
        categories: []
    }



    toggleAddCategory = () => {
        this.setState({
            ...this.state,
            addingCategory: !this.state.addingCategory
        })
    }

    onSaveNewCategory = (category) => {
        let newCategoriesList = this.state.categories;
        newCategoriesList.push(category);
        this.setState({
            ...this.state,
            categories: newCategoriesList
        })
        this.toggleAddCategory();
        console.log(this.state, "promptsection")
    }

    render() {

        const promptCategories = [];
        for (let key in this.state.categories) {
            promptCategories.push({
                id: key,
                prompt: this.state.categories[key]
            })
        }

        let displayCategories = (
            <div>
                {promptCategories.map(category => (
                    <PromptCategory
                        key={category.id}
                        categoryName={category.categoryName}
                    />
                ))}
            </div>
        )

        return (
            <Aux>
                <Button onClick={this.toggleAddCategory}>Add Prompt Category</Button>
                <CreatePromptCategory
                    open={this.state.addingCategory}
                    onSaveNewCategory={this.onSaveNewCategory}
                    toggleAddCategory={this.toggleAddCategory}
                />
                <div>
                    {displayCategories}
                </div>
            </Aux>
        );
    }
}

export default Prompts;