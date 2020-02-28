
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid'
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function TrailCard(props) {
    const info = props.info;
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const difMap = {
        "blueBlack":"intermediate/difficult",
        "black":"difficult",
        "blue":"intermediate",
    }

    return (
        <Grid item xs={12} spacing={5}>

                <Card className={classes.root}>
                  <Box textDecoration={'none'} color={'black'}>
                  <Link to={("/trail/" + info.id)} style={{ textDecoration: 'none' }}>

      <CardHeader
        title={info.name}
      />
      <CardMedia
        className={classes.media}
        image={info.imgMedium}
        title={info.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            <Grid 
                container
                spacing={2}
            >
                <Grid item>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid item xs={2}>
                            <Rating name="read-only" value={info.stars}Only />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                {info.summary} It is a {difMap[info.difficulty]} route.
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item>
                        <ul>
                            <li>State:                   <Link to={("states/Colorado")} style={{ textDecoration: 'none' }}> Colorado</Link> </li>
                            <li>Length: {info.length} miles </li>
                            <li>Peak elvation: {info.high} ft. </li>
                        </ul>
                    </Grid>

                    
                    </Grid>
                </Grid>
            </Grid>
        </Typography>
      </CardContent>
      </Link>
      </Box>

    </Card>
        </Grid>
    )
}
