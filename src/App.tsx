import { Suspense, lazy } from "react";
import { routeList } from "./constants/route";
import { Route, Routes } from "react-router-dom";
import Background from "./Background";
import GlobalNavigationBar from "./components/GlobalNavigationBar";
import { Content, ContentLayout } from "./styles/ContentLayout";

const ScrollPhoneNumberPage = lazy(() => import("./pages/ScrollPhoneNumberPage"));
const GivenNumberCalculatorPage = lazy(() => import("./pages/GivenNumberCalculatorPage"));
const RandomNumberCalculatorPage = lazy(() => import("./pages/RandomNumberCalculatorPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const App = () => {
  const routeComponents = {
    [routeList.HOME]: <HomePage />,
    [routeList.ScrollPhoneNumber]: <ScrollPhoneNumberPage />,
    [routeList.GivenNumberCalculator]: <GivenNumberCalculatorPage />,
    [routeList.RandomNumberCalculator]: <RandomNumberCalculatorPage />,
    [routeList.NotFound]: <NotFound />,
  };
  return (
    <>
      <Background />
      <ContentLayout>
        <GlobalNavigationBar />
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {Object.entries(routeComponents).map(([path, element]) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </Content>
      </ContentLayout>
    </>
  );
};

export default App;
