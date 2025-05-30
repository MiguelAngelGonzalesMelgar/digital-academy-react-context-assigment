import styles from "./navbar.module.css"
import { FiMessageSquare } from "react-icons/fi";
import TriggerButton2 from "../triggerButton2/TriggerButton2";

const Navbar = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span><FiMessageSquare size={32} color="green"/></span>
        <TriggerButton2/>
      </nav>
    </header>
  )
}

export default Navbar
