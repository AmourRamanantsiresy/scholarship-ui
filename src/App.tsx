import React, { FC, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { APP_CONTEXT, context } from './Provider/context';
import { noUseScroll } from './Utils/Hooks/useScroll';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import Loading from './Pages/Loading/Loading';
import Login from './Pages/Login/Login';
import Candidate from './Pages/Login/Candidate';
import SignUp from './Pages/Login/SingUp';
import { TContext } from './Provider/types';
import { Error } from './Pages/Error/Error';
import Landing from './Pages/Landing/Landing';

const App: FC = () => {
  const scrollHandling = useState(0);
  const appContext: TContext = { ...context, scrollHandling };

  useEffect(() => {
    noUseScroll(scrollHandling);
  });

  return (
    <APP_CONTEXT.Provider value={appContext}>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/profile" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </APP_CONTEXT.Provider>
  );
};

export default App;
