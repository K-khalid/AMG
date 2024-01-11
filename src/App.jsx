import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Account from "./pages/Account";
import GlobalStyles from "./styles/GlobalStyle";
import { DarkmodeProvider } from "./context/DarkmodeContext";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Signup from "./pages/Signup";
import ProtectedRouter from "./ui/ProtectedRouter";
import Error from "./pages/Error";
import Manage from "./pages/Manage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemesProvider } from "./context/ThemesContext";
import TestOrder from "./pages/Order";
import { BASEURL } from "./utils/Base";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkmodeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyles />
        <ThemesProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route
                  index
                  element={<Navigate replace to={`${BASEURL}/`} />}
                />
                <Route path={`${BASEURL}/`} element={<Home />} />
                <Route
                  path={`${BASEURL}/order`}
                  element={
                    <ProtectedRouter>
                      <TestOrder />
                    </ProtectedRouter>
                  }
                />

                <Route
                  path={`${BASEURL}/account`}
                  element={
                    <ProtectedRouter>
                      <Account />
                    </ProtectedRouter>
                  }
                />

                <Route
                  path={`${BASEURL}/manage`}
                  element={
                    <ProtectedRouter>
                      <Manage />
                    </ProtectedRouter>
                  }
                />
              </Route>
              <Route path={`${BASEURL}/login`} element={<Login />} />
              <Route path={`${BASEURL}/signup`} element={<Signup />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </ThemesProvider>
        <Toaster
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              backgroundColor: "var(--color-grey-100)",
              color: "var(--color-grey-900)",
              padding: "10px 20px",
              fontSize: "14px",
              textAlign: "center",
              fontWeight: "600",
            },
          }}
        />
      </QueryClientProvider>
    </DarkmodeProvider>
  );
}

export default App;
