import { useEffect, useState } from "react";

import ComponentTest from "./components/ComponentTest";
import ComponentTestAsync from "./components/ComponentTestAsync";

const App = () => {
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setName("Rody");
    }, 2000);
  }, []);

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <ComponentTestAsync />
      <ComponentTest name={name} />
    </div>
  );
};

export default App;
