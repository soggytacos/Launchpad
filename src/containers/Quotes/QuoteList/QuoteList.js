import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "30%"
    },
    title: {
        fontSize: 18
    },
    pos: {
        marginBottom: 12,
    }
});


const quoteList = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} varient="outlined">
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {props.selectedQuote ? props.selectedQuote.text : "no quotes yet..."}
                </Typography>
                <Typography varient="h5" component="h5">
                    {props.selectedQuote ? "~ " + props.selectedQuote.author : "Add one!"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.refreshQuote}>refresh</Button>
            </CardActions>
        </Card>
    );
};

export default quoteList;