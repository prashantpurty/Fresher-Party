import React from "react";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { Login } from "./components/Login";
import { useCurrectUser } from "./hooks/client";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ticket from "./components/Ticket";
import Footer from "./components/Footer";
import Admin from "./components/Admin";

const ADMIN = import.meta.env.VITE_ADMIN;

function App() {
  const { user, error } = useCurrectUser();

  const isAdmin = user && ADMIN.split(",").includes(user.email);

  return (
    <div className="dark">
      <Router>
        <Routes>
          {user ? (
            isAdmin ? (
              <>
                <Route path="/" element={<Admin />} />
                <Route path="/*" element={<NotFound />} />
              </>
            ) : (
              <>
                <Route path="/" element={<BackgroundLinesDemo />} />
                <Route path="/ticket" element={<Ticket />} />
                <Route path="/*" element={<NotFound />} />
              </>
            )
          ) : (
            <>
              <Route path="/*" element={<Login />} />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
