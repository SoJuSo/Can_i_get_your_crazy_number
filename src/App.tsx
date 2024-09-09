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
  return (
    <>
      <Background />
      <ContentLayout>
        <GlobalNavigationBar />
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path={routeList.HOME} // 메인페이지
                element={<HomePage />}
              />
              <Route
                path={routeList.ScrollPhoneNumber} // 스크롤 입력기 페이지
                element={<ScrollPhoneNumberPage />}
              />
              <Route
                path={routeList.GivenNumberCalculator} // 계산기 입력기 페이지
                element={<GivenNumberCalculatorPage />}
              />
              <Route
                path={routeList.RandomNumberCalculator} // 랜덤 입력기 페이지
                element={<RandomNumberCalculatorPage />}
              />
              <Route
                path={routeList.NotFound} // 404 페이지
                element={<NotFound />}
              />
            </Routes>
          </Suspense>
        </Content>
      </ContentLayout>
    </>
  );
};

export default App;
