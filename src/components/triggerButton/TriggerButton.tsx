import { useContext } from "react";
import { NotificationsContext } from "../../context/NotificationsContext";
import "./triggerButton.module.css"

const TriggerButton = () => {
  const {showNotification} = useContext(NotificationsContext);

  const handleOnClick = (): void => {

    showNotification("This is a custom notification", "Custom");
  }

  return (
    <button 
    className="trigger-button"
    onClick={handleOnClick}
    >
      Show Custom Notification
    </button>
  )
}

export default TriggerButton;
