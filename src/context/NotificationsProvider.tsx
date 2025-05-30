import { useEffect, useState, type ReactNode } from "react";
import { NotificationsContext, type Notification, type NotificationType } from "./NotificationsContext";

interface NotificationsProviderProps {
  children: ReactNode;
}

export const NotificationsProvider = ({children}: NotificationsProviderProps) => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({message, type});
  };

  const clearNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (!notification) { 
      return;
    }

    const timer = setTimeout(() => {
      clearNotification();
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <NotificationsContext.Provider
    value={{notification, showNotification, clearNotification}}
    >
      {children}
    </NotificationsContext.Provider>
  )
}