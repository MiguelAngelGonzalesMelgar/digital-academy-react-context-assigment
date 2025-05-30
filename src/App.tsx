import './App.css'
import Navbar from './components/navbar/Navbar';
import TriggerButton from './components/triggerButton/TriggerButton';
import { NotificationsProvider } from './context/NotificationsProvider'

function App() {

  return (
    <NotificationsProvider>
      <Navbar/>
      <main>
        <h2>Notification System</h2>
        <TriggerButton />
      </main>
    </NotificationsProvider>
  );
}

export default App;
