import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ContextProviders from "./assets/components/contexts/contextProviders.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProviders>
        <App />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </ContextProviders>
    </BrowserRouter>
  </StrictMode>
);
