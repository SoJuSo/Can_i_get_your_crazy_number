import { useEffect, useState } from "react";
import ScrollPhoneNumberPage from "./pages/ScrollPhoneNumberPage";
import GivenNumberCalculatorPage from "./pages/GivenNumberCalculatorPage";
import RandomNumberCalculatorPage from "./pages/RandomNumberCalculatorPage";
import NotFound from "./pages/NotFoundPage";
import { routeList } from "./constants/route";

const App = () => {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    setPageName(window.location.pathname);
  }, []);

  // Todo GNB

  switch (pageName) {
    case routeList.HOME:
      return <div>Home</div>;
    case routeList.ScrollPhoneNumber:
      return <ScrollPhoneNumberPage />;
    case routeList.GivenNumberCalculator:
      return <GivenNumberCalculatorPage />;
    case routeList.RandomNumberCalculator:
      return <RandomNumberCalculatorPage />;
    default:
      return <NotFound />;
  }
};

export default App;
