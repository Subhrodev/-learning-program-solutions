import React, { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}

export default App;

