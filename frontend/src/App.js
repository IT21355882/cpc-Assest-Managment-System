import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Add from "./Components/AssetAdd/Add";
import Details from "./Components/AssetDetails/Details";
import Update from "./Components/Update/Update";
import SignIn from "./Components/SignIn";
import Register from "./Components/Register";
import ProtectedRoute from "./Components/RouterProtector";
import RoleProtectedRoute from "./Components/RouterProtector/roleProtector";
import NotFound from "./Components/RouterProtector/404";
import UpdateAsset from "./Components/UpdateAsset";
import UserList from "./Components/UserList";
import UserProfile from "./Components/UserProfile";

const isAdminAuthenticated = () => {
  const userPosition = JSON.parse(localStorage.getItem("LoginUserPosition"));
  const isLogin = JSON.parse(localStorage.getItem("IsLogin"));
  return userPosition === "Admin";
};

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <RoleProtectedRoute>
                  <Register />
                </RoleProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mainhome"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addasset"
            element={
              <ProtectedRoute>
                <Add />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateAsset/:id"
            element={
              <ProtectedRoute>
                <RoleProtectedRoute>
                  <UpdateAsset />
                </RoleProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/userList"
            element={
              <ProtectedRoute>
                <RoleProtectedRoute>
                  <UserList />
                </RoleProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/details/:id" element={<Update />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
