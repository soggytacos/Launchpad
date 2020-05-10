import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSelects() {
    const classes = useStyles();
    const [hours, setHours, minutes, setMinutes, seconds, setSeconds] = React.useState('');
    // const handleHoursChange = (event) => {
    //     setHours(event.target.value);
    // };
    // const handleMinutesChange = (event) => {
    //     setMinutes(event.target.value);
    // };
    // const handleSecondsChange = (event) => {
    //     setSeconds(event.target.value);
    // };

    let hoursList = [];
    for (let i = 0; i <= 24; i += 1) {
        hoursList.push(i)
    }
    let hoursDropdown = (
        <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">hours</InputLabel>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={hours}
                // onChange={handleHoursChange}
                input={<BootstrapInput />}
            >
                {hoursList.map((i) => (
                    <MenuItem key={i} value={i} /*style={getStyles(i, personName, theme)}*/>
                        {i}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );

    let minutesList = [];
    for (let i = 0; i <= 60; i += 1) {
        minutesList.push(i)
    }
    let minutesDropdown = (
        <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">minutes</InputLabel>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={minutes}
                // onChange={handleMinutesChange}
                input={<BootstrapInput />}
            >
                {minutesList.map((i) => (
                    <MenuItem key={i} value={i} /*style={getStyles(i, personName, theme)}*/>
                        {i}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );

    let secondsList = [];
    for (let i = 0; i <= 60; i += 1) {
        secondsList.push(i)
    }
    let secondsDropdown = (
        <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">seconds</InputLabel>
            <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={seconds}
                // onChange={handleSecondsChange}
                input={<BootstrapInput />}
            >
                {secondsList.map((i) => (
                    <MenuItem key={i} value={i} /*style={getStyles(i, personName, theme)}*/>
                        {i}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
    return (
        <div>
            {hoursDropdown}
            {minutesDropdown}
            {secondsDropdown}
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