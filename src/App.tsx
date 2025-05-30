import './App.css'
import Notification from './components/notification/Notification'
import TriggerButton from './components/triggerButton/triggerButton'
import { NotificationsProvider } from './context/NotificationsProvider'

function App() {

  return (
    <NotificationsProvider>
      <Notification />
      <main>
        <h2>Welcome to My App</h2>
        <TriggerButton />
      </main>
    </NotificationsProvider>
  );
}

export default App;
