import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import "./notification.module.css"

const Notification = () => {
  const { notification } = useContext(NotificationsContext);

  if (!notification) {
    return null;
  }
  
  const {message, type} = notification;

  const className = `notification ${type.toLowerCase()}`;

  return (
    <div className={className}>
      <p className="notification-message">{message}</p>
    </div>
  )
}

export default Notification;
