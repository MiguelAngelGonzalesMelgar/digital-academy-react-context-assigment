import { useState, type ReactNode } from "react";
import { NotificationsContext, type Notification, type NotificationType } from "./NotificationsContext";
import NotificationsList from "../components/notification/NotificationList"

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({ children }: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (message: string, type: NotificationType) => {
    const newNotification = { message, type };
    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(notification => notification !== newNotification));
    }, 3000);
  };

  const clearNotification = (message: string) => {
    setNotifications(prev => prev.filter(notification => notification.message !== message));
  };

  return (
    <NotificationsContext.Provider
      value={{
        notification: null, 
        showNotification,
        clearNotification: () => {},
      }}
    >
      {children}
      <NotificationsList notifications={notifications} onClear={clearNotification} />
    </NotificationsContext.Provider>
  );
};
