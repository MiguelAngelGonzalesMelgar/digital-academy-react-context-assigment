import { useEffect, useState, type ReactNode } from "react";
import { NotificationsContext, type Notification, type NotificationType } from "./NotificationsContext";

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({children}: NotificationsProviderProps) => {
  const [notificationQueue, setNotificationQueue] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotificationQueue(prevQueue => [...prevQueue, {message, type}]);
  };

  const clearNotification = () => {
    setCurrentNotification(null);
  };

  useEffect(() => {
    if (!currentNotification && notificationQueue.length > 0) { 
      setCurrentNotification(notificationQueue[0]);
      setNotificationQueue(prev => {
        const [, ...rest] = prev;
        return rest;
      });
    }
  }, [notificationQueue, currentNotification]);

  useEffect(() => {
    if (!currentNotification) {
      return;
    }

    const timer = setTimeout(() => {
      clearNotification();
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentNotification]);

  return (
    <NotificationsContext.Provider
    value={{notification:currentNotification, showNotification, clearNotification}}
    >
      {children}
    </NotificationsContext.Provider>
  )
}