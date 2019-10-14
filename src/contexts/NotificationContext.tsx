import { createContext } from "react";
import {INotification} from "../models/INotification";

const NotificationContext = createContext<[INotification[], (talk: INotification) => void]>([[], x => {}]);

const NotificationContextProvider = NotificationContext.Provider;
const NotificationContextConsumer = NotificationContext.Consumer;
export { NotificationContext, NotificationContextProvider, NotificationContextConsumer };
