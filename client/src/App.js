import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import AuthRoute from "./utils/AuthRoute";
import NonAuthRoute from "./utils/NonAuthRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import AddEventForm from "./pages/AddEventForm";
import EditEventForm from "./pages/EditEventForm";

// Have to start from routing and styling
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <NonAuthRoute exact path="/dashboard" component={DashBoard} />
        <Route exact path="/add" component={AddEventForm} />
        <Route exact path="/edit/:eventId" component={EditEventForm} />
        {/* Have to make the add page a NonAuthRoute later */}
      </Router>
    </AuthProvider>
  );
}

export default App;
