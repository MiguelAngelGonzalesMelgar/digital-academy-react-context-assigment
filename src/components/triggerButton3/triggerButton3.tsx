import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./triggerButton3.module.css"

const TriggerButton3 = () => {
  const {showNotification} = useContext(NotificationsContext);

  const handleOnClick = (): void => {
    showNotification("Warning: Unsecure credentials", "Warning")
  }
  return (
    <button
    className={styles.button}
    onClick={handleOnClick}
    >
    Warning Message
  </button>
  )
}

export default TriggerButton3;
