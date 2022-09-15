import React, { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { APP_CONTEXT, context } from "./Provider/context";
import { noUseScroll } from "./Utils/Hooks/useScroll";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import Loading from "./Pages/Loading/Loading";
import Login from "./Pages/Login/Login";
import { TContext } from "./Provider/types";

const App: FC = () => {
  const scrollHandling = useState(0);
  const appContext: TContext = { ...context, scrollHandling };

  useEffect(() => {
    noUseScroll(scrollHandling);
  });

  return (
    <APP_CONTEXT.Provider value={appContext}>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </APP_CONTEXT.Provider>
  );
};

export default App;
