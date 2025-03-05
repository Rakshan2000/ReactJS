import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrumBoard from "./pages/scrum-board";
import Login from "./pages/auth/login";
import Tasks from "./pages/tasks";
import Register from "./pages/auth/register";
import AuthPage from "./pages/auth/private-route";
import ProfilePage from "./pages/profile";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route
            path="/"
            element={
              <AuthPage>
                <ScrumBoard />
              </AuthPage>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
