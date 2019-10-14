import React from 'react';
import Badge from "@material-ui/core/Badge/Badge";
import GetNotifications from "../../providers/NotificationApi";
import NotificationsIcon from '@material-ui/icons/Notifications';
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import {NotificationContext} from "../../contexts/NotificationContext";

const Notification: React.FC = () => {
    //TODO implement the use of context here
    //TODO implement the use of context here
    //TODO implement the use of context here
    //TODO implement the use of context here

    const [isLoading, notifications] = GetNotifications();

    let activeNotifications = [];

    if (!isLoading && notifications) {
        activeNotifications = notifications.filter((notification) => {
            return !notification.active;
        });
    }

    return (
        <NotificationContext value={notifications}>
            <IconButton
                aria-label={"show " + activeNotifications.length + " new notifications"}
                color="inherit">
                <Badge
                    badgeContent={activeNotifications.length}
                    color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                //anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={'primary-account-menu'}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={false}
                onClose={this.handleMenuClose}>
            </Menu>
        </NotificationContext>
    )
};

export default Notification;