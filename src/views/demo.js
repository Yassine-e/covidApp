import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import LensIcon from '@material-ui/icons/Lens';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AirlineSeatFlatTwoToneIcon from '@material-ui/icons/AirlineSeatFlatTwoTone';
import ExposurePlus1TwoToneIcon from '@material-ui/icons/ExposurePlus1TwoTone';
import ExposurePlus2TwoToneIcon from '@material-ui/icons/ExposurePlus2TwoTone';
import ClearAllTwoToneIcon from '@material-ui/icons/ClearAllTwoTone';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
export default function InsetDividers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    <div className="blocks">
        <div className="deathsRecovered">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ClearAllTwoToneIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Comfirmed" secondary="Jan 9, 2014" style={{width:"310px"}} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <AirlineSeatFlatTwoToneIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total Deaths" secondary="Jan 7, 2014" style={{width:"310px"}} />
            </ListItem>
        </div> 
        <div className="totalComfirmed">
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ExposurePlus1TwoToneIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total first Vaccinated" secondary="Jan 9, 2014" style={{width:"310px"}} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ExposurePlus2TwoToneIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Total second Vaccinated" secondary="Jan 7, 2014" style={{width:"310px"}} />
            </ListItem>
        </div>  
    </div>
    </List>
  );
}
