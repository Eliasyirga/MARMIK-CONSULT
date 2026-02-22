import React, { useEffect, useState } from "react";
import Home from "./pages/HomePage";
import LoadingSpinner from "./components/LoadingSpinner";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
