import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./notification.module.css"
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";


const Notification = () => {
  const { notification, clearNotification } = useContext(NotificationsContext);

  if (!notification) {
    return null;
  }
  
  const {message, type} = notification;

  const className = `${styles.notification} ${styles[type.toLowerCase()]}`;

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          className={className}
          initial={{ opacity: 0, y: -5,}}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          key={message} // helps AnimatePresence detect change
        >
          <button
            className={styles.closeButton}
            onClick={clearNotification}
            aria-label="Close notification"
          >
            <AiOutlineClose />
          </button>
          <p className={styles.notificationMessage}>{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Notification;
