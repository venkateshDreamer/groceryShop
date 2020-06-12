import React, { useContext, useReducer, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Context from "store/context";
import reducer from "store/reducer";
import routes from "routes/routes";

import 'assets/css/style.css'
import 'assets/css/common.css'
import 'react-notifications/lib/notifications.css';

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Context.Provider value={{ state, dispatch }}>
        <Route component={routes} />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;


