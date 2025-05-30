import { createContext } from "react";

export type NotificationType = "Info" |"Warning" | "Error" | "Custom";

export interface Notification {
    message: string;
    type: NotificationType;
}

export interface NotificationContextValue {
  notification: Notification | null;
  showNotification: (message: string, type: NotificationType) => void;
  clearNotification: () => void;
}

const defaultValue: NotificationContextValue = {
  notification: null,
  showNotification: () => {},
  clearNotification: () => {},
};

export const NotificationsContext = createContext<NotificationContextValue>(defaultValue);
  

