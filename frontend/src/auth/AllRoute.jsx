import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainFrame from "../components/MainFrame";
import PrivateRoute from "./protected";

const Signup = lazy(() => import("../pages/Signup/Signup"));
const Tasks = lazy(() => import("../pages/Tasks/Tasks"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense
            fallback={
              <div>
                <h1>Loading...</h1>
              </div>
            }>
            <MainFrame />
          </Suspense>
        }>
        <Route
          index
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="/login"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }>
              <LoginPage />
            </Suspense>
          }></Route>

        <Route
          path="/signup"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/tasks"
          element={
            <Suspense
              fallback={
                <div>
                  <h1>Loading...</h1>
                </div>
              }>
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
