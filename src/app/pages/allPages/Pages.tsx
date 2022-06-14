import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "app/hooks";
import { LoginPage, MainLayout, NotFoundPage } from "app/pages";
import {
  AlbumPage,
  AlbumsListPage,
  CreateAlbumPage,
  EditAlbumPage,
} from "app/pages/albums";

const Pages: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthorizedUser) {
      navigate("login");
    }
  }, [auth.isAuthorizedUser, navigate]);

  return (
    <Routes>
      {auth.isAuthorizedUser ? (
        <Route path="/" element={<MainLayout />}>
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
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Pages;
