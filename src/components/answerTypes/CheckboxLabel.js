import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from "@material-ui/core/FormGroup";


const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabel() {
    const [state, setState] = React.useState({
        checkedG: false,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <FormGroup row>
            <FormControlLabel
                control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG"/>}
                label="Complete"
            />
        </FormGroup>
    );
}