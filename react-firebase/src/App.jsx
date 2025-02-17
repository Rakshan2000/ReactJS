import { Route, Routes } from "react-router-dom";
import LoginComponent from "./pages/login";
import RegisterComponent from "./pages/register";
import ProfilePage from "./pages/profile";
import AuthPage from "./pages/private-route";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route
            path="/profile"
            element={
              <AuthPage>
                <ProfilePage />
              </AuthPage>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
