// App Component remains unchanged
import React, { useState } from "react";
import SplashScreen from "./Page/SplashScreen";
import LandingPage from "./Page/LandingPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleSplashFinish = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 1000);
  };

  return (
    <div className="w-screen h-screen">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} isExiting={isExiting} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
