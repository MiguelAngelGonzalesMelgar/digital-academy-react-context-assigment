import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./notification.module.css"

const Notification = () => {
  const { notification } = useContext(NotificationsContext);

  if (!notification) {
    return null;
  }
  
  const {message, type} = notification;

  const className = `${styles.notification} ${styles[type.toLowerCase()]}`;

  return (
    <div className={className}>
      <p className={styles.notificationMessage}>{message}</p>
    </div>
  )
}

export default Notification;
