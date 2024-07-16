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

const Router = () => {
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
                path={routeList.ScrollPhoneNumber} // 메인페이지
                element={<ScrollPhoneNumberPage />}
              />
              <Route
                path={routeList.GivenNumberCalculator} // 메인페이지
                element={<GivenNumberCalculatorPage />}
              />
              <Route
                path={routeList.RandomNumberCalculator} // 메인페이지
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

export default Router;
