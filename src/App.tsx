import './App.css'
import Navbar from './components/navbar/Navbar';
import TriggerButton from './components/triggerButton/TriggerButton';
import TriggerButton3 from './components/triggerButton3/triggerButton3';
import TriggerButton4 from './components/triggerButton4/triggerButton4';
import { NotificationsProvider } from './context/NotificationsProvider'

function App() {

  return (
    <NotificationsProvider>
      <Navbar/>
      <main>
        <h2>Notification System</h2>
        <section className='button-container'>
        <TriggerButton />
        <TriggerButton3 />
        <TriggerButton4 />
        </section>
      </main>
    </NotificationsProvider>
  );
}

export default App;
