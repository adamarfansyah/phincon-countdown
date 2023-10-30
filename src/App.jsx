import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [setSearchParams] = useSearchParams();
  const date = "2024-07-30T00:00:00";
  const paramsDate = setSearchParams(date);

  useEffect(() => {
    if (date) {
      navigate(`/countdown?date=${date}`, { state: { date: paramsDate } });
    }
  }, []);

  return (
    <>
      <h1>Something went wrong</h1>
    </>
  );
}

export default App;
