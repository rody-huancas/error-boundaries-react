import { useEffect, useState } from "react";
import { ErrorBoundary } from "../utilities";

const ComponentTestAsync = () => {
  const [result, setResult] = useState();
  const [error, setError] = useState<boolean>(false);
  let url = "https://rickandmortyapi.com/api/characters/1";

  const fetchRickAndMorty = async () => {
    const response = await fetch(url)
      .then((r) => {
        if (r.status !== 200) throw new Error("[ERROR]");
        setError(false);
        return r;
      })
      .catch((error) => {
        url = "https://rickandmortyapi.com/api/character/1";
        setError(true);
        throw new Error(error);
      });

    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    fetchRickAndMorty();

    setTimeout(() => {
      fetchRickAndMorty();
    }, 4000);
  }, []);

  return (
    <ErrorBoundary
      fallbackComponent={<>ERROR AL MOSTRAR LOS DATOS</>}
      resetCondition={result}
      error={error}
    >
      <div style={{ width: "100vw", overflow: "hidden", textWrap: "wrap" }}>{JSON.stringify(result)}</div>
    </ErrorBoundary>
  );
};

export default ComponentTestAsync;
