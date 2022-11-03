import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.info(import.meta.env.VITE_SECRETKEY);
  }, []);

  return (
    <div className="App">
      <h1>Home Page</h1>
    </div>
  );
}
