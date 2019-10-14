import React from 'react';
import {AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Notification from './Notification'
import Account from "./Account";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        }
    }),
);

const MenuBar: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        LuGa
                    </Typography>
                    <div className={classes.grow} />
                    <div>
                        <Notification />
                        <Account />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default MenuBar;
