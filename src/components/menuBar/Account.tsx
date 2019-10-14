import React from 'react';
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";

class Account extends React.Component<{}> {
    setAnchorEl(state:{} | null){
        React.useState<null | HTMLElement>(null);
    }

    handleProfileMenuOpen(event: React.MouseEvent<HTMLElement>){
        this.setAnchorEl(event.currentTarget);
    }

    handleMenuClose() {
        this.setAnchorEl(null);
    };

    render() {
        const menuId = 'primary-account-menu';

        const isMenuOpen = false;

        return (
            <>
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit">
                    <AccountCircle />
                </IconButton>
                <Menu
                    //anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={this.handleMenuClose}>
                    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>Billing</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
                </Menu>
            </>
        )
    }
}

export default Account;