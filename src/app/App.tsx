import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
// import { Example } from "./components";
import Table from "./components/Table";
import AuthProvider from "./hoc/AuthProvider";
import PrivateRoute from "./hoc/PrivateRoute";
import AlbumPage from "./pages/AlbumPage";
import CreateAlbumPage from "./pages/CreateAlbumPage";
import EditAlbumPage from "./pages/EditAlbumPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Routes>
          <Route
            path="admin_panel"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          >
            <Route path="albums" element={<Table />} />
            <Route path="albums/:id" element={<AlbumPage />} />
            <Route path="albums/:id/edit" element={<EditAlbumPage />} />
            <Route path="albums/create" element={<CreateAlbumPage />} />
          </Route>
          <Route path="admin_panel/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
