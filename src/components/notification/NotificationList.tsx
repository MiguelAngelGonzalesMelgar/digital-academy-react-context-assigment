import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./notification.module.css";
import { type Notification } from "../../context/NotificationsContext";

interface NotificationsListProps {
  notifications: Notification[];
  onClear: (message: string) => void;
}

const NotificationsList = ({ notifications, onClear }: NotificationsListProps) => {
  return (
    <div className={styles.notificationContainer}>
      <AnimatePresence>
        {[...notifications].map(({ message, type }, index) => {
          const className = `${styles.notification} ${styles[type.toLowerCase()]}`;
          return (
            <motion.div
              key={message + index}
              className={className}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className={styles.notificationMessage}>{message}</p>
              <button
                className={styles.closeButton}
                onClick={() => onClear(message)}
                aria-label="Close notification"
              >
                <AiOutlineClose />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default NotificationsList;
