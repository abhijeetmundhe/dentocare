import React from 'react';
import '../App.css';
import AppRouter from './AppRouter';
import AppNavigation from './AppNavbar';

function App() {
  const data = require('../Data/PatientData.json');
  // const firstObj = { name: 'Abhijeet', age: 33 };
  // const firstObjStr = JSON.stringify(firstObj);
  // localStorage.setItem('firstObj', firstObjStr);
  const firstObjFromStorage = localStorage.getItem('firstObj');
  console.log('*** firstObjFromStorage = ' + JSON.parse(firstObjFromStorage).name);

  return (
    <div className="App">
      <header className="App-header">
        <AppNavigation />
        <AppRouter data={data}/>
      </header>
    </div>
  );
}

export default App;
