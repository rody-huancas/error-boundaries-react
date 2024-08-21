import ComponentTest from "./components/ComponentTest";
import "./App.css";
import { ErrorBoundary } from "./utilities";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary fallbackComponent={<>NO ANDAA!!!!</>}>
        <ComponentTest name="" />
      </ErrorBoundary>
    </div>
  );
};

export default App;
