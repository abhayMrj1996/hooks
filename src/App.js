import React from 'react';
import './App.css';
import { useRef } from 'react';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

function App() {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal()
  }

  console.log('parent rendered');

  return (
    <div className="App">    
      <p>Parent Component</p>
      <br /><br />
      <ComponentOne handleOpenModal={handleOpenModal} />
      <ComponentTwo ref={modalRef} />      
    </div>
  );
}

export default App;
