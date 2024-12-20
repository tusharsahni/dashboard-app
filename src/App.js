import React from 'react';
import NavigationMenu from './components/NavigationMenu';
import ProgressBar from './components/ProgressBar';
import ClaimForm from './components/ClaimForm';
import './index.css';

function App() {
  return (
    <div className="flex h-screen bg-[#F6F9FE]">
      <NavigationMenu />
      <div className="flex-1 p-6">
        <ProgressBar currentStep={4} />
        <ClaimForm />
      </div>
    </div>
  );
}

export default App;
