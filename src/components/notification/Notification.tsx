import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./notification.module.css"
import { AiOutlineClose } from "react-icons/ai";


const Notification = () => {
  const { notification, clearNotification } = useContext(NotificationsContext);

  if (!notification) {
    return null;
  }
  
  const {message, type} = notification;

  const className = `${styles.notification} ${styles[type.toLowerCase()]}`;

  return (
    <div className={className}>
      <button 
      className={styles.closeButton} 
      onClick={clearNotification} 
      aria-label="Close notification">
      <AiOutlineClose />
      </button>
      <p className={styles.notificationMessage}>{message}</p>
    </div>
  )
}

export default Notification;
