import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import styles from "./triggerButton2.module.css"

const TriggerButton2 = () => {
  const {showNotification} = useContext(NotificationsContext);

  const handleOnClick = (): void => {
    showNotification("Navbar custom notification", "Custom")
  }
  return (
    <button
    className={styles.button}
    onClick={handleOnClick}
    >
    Custom Message
  </button>
  )
}

export default TriggerButton2;
