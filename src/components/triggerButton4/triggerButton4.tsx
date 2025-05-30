import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./triggerButton4.module.css"

const TriggerButton4 = () => {
  const {showNotification} = useContext(NotificationsContext);

  const handleOnClick = (): void => {
    showNotification("Critical Error: Invalid credentials!", "Error")
  }
  return (
    <button
    className={styles.button}
    onClick={handleOnClick}
    >
    Error Message
  </button>
  )
}

export default TriggerButton4;
