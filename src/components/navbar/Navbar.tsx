import styles from "./navbar.module.css"
import { FiMessageSquare } from "react-icons/fi";

const Navbar = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <span><FiMessageSquare size={32} color="green"/></span>
        <button className={styles.button}>
          Custom Message
        </button>
      </nav>
    </header>
  )
}

export default Navbar
