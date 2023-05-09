import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";
import Loading from "./pages/loading/loading";
import NotFound from "./pages/not-found/not-found";
import { ANY_ROUTE, CABINET_RECORDS_ROUTE, CABINET_ROUTE, INITIAL_ROUTE, LOGIN_ROUTE } from "./models/routes";
import Shell from "./shell/shell";
import "./styles/styles.scss";
/* autoprefixer: off */
import "bootstrap/dist/css/bootstrap.min.css";
import RouterManagement from "./pages/router-management/router-management";
import useSettingsSelectors from "./store/selectors/settings";

//cabinet
const Login = lazy(() => import("./pages/login/login"));
const Records = lazy(() => import("./pages/records/records"));

function App() {
  const { theme } = useSettingsSelectors();

  return (
    <div className="app" data-theme={theme}>
      <Suspense fallback={<Loading />}>
        <div className={styles.app}>
          <Routes>
            <Route path={INITIAL_ROUTE} element={<RouterManagement />} />
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={CABINET_ROUTE} element={<Shell />}>
              <Route path={CABINET_RECORDS_ROUTE} element={<Records />} />
            </Route>
            <Route path={ANY_ROUTE} element={<NotFound />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
