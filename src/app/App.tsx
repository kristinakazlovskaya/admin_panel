import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import { AuthProvider, PrivateRoute } from "app/hoc";
import {
  AlbumPage,
  AlbumsListPage,
  CreateAlbumPage,
  EditAlbumPage,
  LoginPage,
  MainPage,
  NotFoundPage,
} from "app/pages";

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
            <Route path="albums" element={<AlbumsListPage />} />
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
