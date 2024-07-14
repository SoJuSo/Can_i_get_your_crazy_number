import { Suspense, lazy } from "react";
import { routeList } from "./constants/route";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

const ScrollPhoneNumberPage = lazy(() => import("./pages/ScrollPhoneNumberPage"));
const GivenNumberCalculatorPage = lazy(() => import("./pages/GivenNumberCalculatorPage"));
const RandomNumberCalculatorPage = lazy(() => import("./pages/RandomNumberCalculatorPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const Router = () => {
  // Todo GNB

  return (
    <>
      <Layout />
      <nav style={{ display: "flex", gap: "1rem", zIndex: "2" }}>
        <Link to={routeList.HOME}>to Home</Link>
        <Link to={routeList.ScrollPhoneNumber}>ScrollPhoneNumber</Link>
        <Link to={routeList.GivenNumberCalculator}>GivenNumberCalculator</Link>
        <Link to={routeList.RandomNumberCalculator}>RandomNumberCalculator</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        {/* GNB */}
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
    </>
  );
};

export default Router;
