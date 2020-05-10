import React from 'react';
import Radio from '@material-ui/core/Radio';
import {FormControlLabel} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('5');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <FormControlLabel
                control={
                    <Radio
                        checked={selectedValue === '1'}
                        onChange={handleChange}
                        value="1"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': '1'}}
                        size="small"

                    />
                }
                label="1"
                labelPlacement="top"
            />

            <FormControlLabel
                control={
                    <Radio
                        checked={selectedValue === '2'}
                        onChange={handleChange}
                        value="2"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': '2'}}
                        size="small"
                    />
                }
                label="2"
                labelPlacement="top"
            />

            <FormControlLabel
                control={
                    <Radio
                        checked={selectedValue === '3'}
                        onChange={handleChange}
                        value="3"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': '3'}}
                        size="small"
                    />
                }
                label="3"
                labelPlacement="top"
            />

            <FormControlLabel
                control={
                    <Radio
                        checked={selectedValue === '4'}
                        onChange={handleChange}
                        value="4"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': '4'}}
                        size="small"
                    />
                }
                label="4"
                labelPlacement="top"
            />

            <FormControlLabel
                control={
                    <Radio
                        checked={selectedValue === '5'}
                        onChange={handleChange}
                        value="5"
                        color="default"
                        name="radio-button-demo"
                        inputProps={{'aria-label': '5'}}
                        size="small"
                    />
                }
                label="5"
                labelPlacement="top"
            />

            <Button
                // onMouseDown={}
                varient="contained"
                style={{color: 'white', backgroundColor: '#5aac44'}}
            >
                {"Submit Answer"}
            </Button>

        </div>
    );
}