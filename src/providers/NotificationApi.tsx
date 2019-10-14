import { useState, useEffect } from "react";
import { INotification } from "../models/INotification"

export default function GetNotifications(): [boolean, INotification[]?] {
    const [isLoading, setLoading] = useState(true);
    const [notifications, setNotifications] = useState<INotification[]>();

    useEffect(() => {
        fetch("/notifications.json")
            .then(res => res.json())
            .then(notifications => {
                setNotifications(notifications);
                setLoading(false);
            });
    }, []);

    return [isLoading, notifications];
}

