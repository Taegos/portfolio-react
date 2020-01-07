import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Appbar from '@material-ui/core/AppBar';
//import Typography from '@material-ui/core/Typography';

const StyledTabs = withStyles({
    root: {
        marginLeft: 'auto',
        margin: '35px 100px 0px 0px'
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        height: '4px',
        '& > div': {
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
        },
    },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }}  />);

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: 'none',
        color: 'rgba(0,0,0,1)',
        opacity: '1',
        minWidth: 100,
        width: 100,
        fontSize: theme.typography.pxToRem(18),
        '&:focus': {
            opacity: '1',
            outline: 'none',
        },
    },
}))(props => <Tab {...props} disableRipple />);

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
}));

export default function Navbar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, index) => {
        setValue(index);
        props.onChange(index);
    };

    return (
        <Appbar className={classes.root}>
            <StyledTabs value={value} onChange={handleChange}>
                <StyledTab label="Home" />
                <StyledTab label="About" />
                <StyledTab label="Portfolio" />
                <StyledTab label="Contact" />
            </StyledTabs>
        </Appbar>
    );
}
