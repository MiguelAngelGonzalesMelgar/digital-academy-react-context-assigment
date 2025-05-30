import { useCallback, useEffect, useState, type ReactNode } from "react";
import { NotificationsContext, type Notification, type NotificationType } from "./NotificationsContext";

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({children}: NotificationsProviderProps) => {
  const [notificationQueue, setNotificationQueue] = useState<Notification[]>([]);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  
  const processQueue = useCallback(() => {
    if (!currentNotification && notificationQueue.length > 0) {
      const [nextNotification, ...rest] = notificationQueue;
      setCurrentNotification(nextNotification);
      setNotificationQueue(rest);
    }
  }, [currentNotification, notificationQueue])

  const showNotification = (message: string, type: NotificationType) => {
    setNotificationQueue(prevQueue => [...prevQueue, {message, type}]);
  };

  const clearNotification = () => {
    setCurrentNotification(null);
  };

  useEffect(() => {
    processQueue();
  }, [notificationQueue, currentNotification, processQueue]);

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