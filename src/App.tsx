import './App.css'
import Notification from './components/notification/Notification'
import TriggerButton from './components/triggerButton/TriggerButton';
import { NotificationsProvider } from './context/NotificationsProvider'

function App() {

  return (
    <NotificationsProvider>
      <Notification />
      <main>
        <h2>Notification System</h2>
        <TriggerButton />
      </main>
    </NotificationsProvider>
  );
}

export default App;
