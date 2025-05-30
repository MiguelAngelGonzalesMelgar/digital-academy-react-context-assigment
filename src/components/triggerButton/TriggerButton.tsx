import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./triggerButton.module.css"

const TriggerButton = () => {
  const {showNotification} = useContext(NotificationsContext);

  const handleOnClick = (): void => {

    showNotification("This is a custom notification", "Custom");
  }

  return (
    <button 
    className={styles.triggerButton}
    onClick={handleOnClick}
    >
      Show Custom Notification
    </button>
  )
}

export default TriggerButton;
