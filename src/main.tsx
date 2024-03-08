import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProviderWithNavigate from "./Auth/AuthProviderWithNavigate.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <AuthProviderWithNavigate>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </AuthProviderWithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
