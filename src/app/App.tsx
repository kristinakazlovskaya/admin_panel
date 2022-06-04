import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./hoc/AuthProvider";
import PrivateRoute from "./hoc/PrivateRoute";
import AlbumPage from "./pages/AlbumPage";
import AlbumsList from "./pages/albumsList";
import CreateAlbumPage from "./pages/CreateAlbumPage";
import EditAlbumPage from "./pages/EditAlbumPage";
import LoginPage from "./pages/login/LoginPage";
import MainPage from "./pages/main/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

// uri: process.env.REACT_APP_API_URL
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
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
            <Route path="albums" element={<AlbumsList />} />
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
