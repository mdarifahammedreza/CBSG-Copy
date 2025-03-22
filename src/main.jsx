import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router"; // Ensure correct import // Import Context Provider
import { AppProvider } from "./AppProvider.jsx";
import "./index.css";
import router from "./Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
