import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.scss";
import Loading from "./pages/loading/loading";
import NotFound from "./pages/not-found/not-found";
import { ANY_ROUTE, CABINET_RECORDS_ROUTE, CABINET_ROUTE, LOGIN_ROUTE } from "./models/routes";
import Shell from "./shell/shell";
import Login from "./pages/login/login";

//cabinet
const Records = lazy(() => import("./pages/records/records"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.app}>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Routes>
          <Route path={CABINET_ROUTE} element={<Shell />}>
            <Route path={CABINET_RECORDS_ROUTE} element={<Records />} />
          </Route>
          <Route path={ANY_ROUTE} element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
