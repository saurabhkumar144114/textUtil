
import Navbar from './components/Navbar';
import TextForm from './components/ConvertToText';
import Alert from './components/Alert';

import './App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#011322';
      document.body.style.color = 'white';
      showAlert("Dark mode has been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#011322';
      showAlert("Light mode has been Enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar
        title="MyApp7"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
