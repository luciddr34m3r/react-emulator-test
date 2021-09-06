import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'firebase/app';

import {
  getDatabase,
  connectDatabaseEmulator,
} from 'firebase/database';

import {
  FirebaseAppProvider,
  useFirebaseApp,
} from 'reactfire';

const FirebaseComponents = ({ children }) => {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  connectDatabaseEmulator(database, 'luciddr34m3r-react-emulator-test-5grxrxvw249pj-9000.githubpreview.dev', 443);

  return (
    <>{children}</>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={{ projectId: 'my-project-1474228297853' }}>
      <FirebaseComponents>
        <App />
      </FirebaseComponents>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
