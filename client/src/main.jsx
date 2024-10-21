import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.jsx";
import "./index.css";

const CLIENTID = import.meta.env.VITE_CLIENT_ID;

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <GoogleOAuthProvider clientId={CLIENTID}>
        <QueryClientProvider client={client}>
          <App />
          <Toaster />
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </NextUIProvider>
  </StrictMode>
);
