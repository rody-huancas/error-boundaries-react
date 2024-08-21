import { useEffect, useState } from "react";

import ComponentTest from "./components/ComponentTest";
import ComponentTestAsync from "./components/ComponentTestAsync";

import "./App.css";

const App = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setName("Rody");
    }, 2000);
  }, []);

  return (
    <div className="App">
      <ComponentTestAsync />
      <ComponentTest name="Rody" />
    </div>
  );
};

export default App;
