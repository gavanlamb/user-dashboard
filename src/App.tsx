import React from 'react';
import './styles/App.css';
import MenuBar from "./components/menuBar/AppBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <MenuBar />
    </div>
  );
};

export default App;
