import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { Routes, Route, Outlet } from "react-router-dom";
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
            <Route
              path="albums"
              element={
                <Box py="4">
                  <Outlet />
                </Box>
              }
            >
              <Route index element={<AlbumsListPage />} />
              <Route path=":id" element={<AlbumPage />} />
              <Route path=":id/edit" element={<EditAlbumPage />} />
              <Route path="create" element={<CreateAlbumPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="admin_panel/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
