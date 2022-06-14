import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "app/hooks";
import { LoginPage, MainLayout, NotFoundPage } from "app/pages";
import {
  AlbumPage,
  AlbumsListPage,
  CreateAlbumPage,
  EditAlbumPage,
} from "app/pages/albums";
import { Crud } from "./components";

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
            path="albums/*"
            element={
              <Crud
                create={CreateAlbumPage}
                list={AlbumsListPage}
                edit={EditAlbumPage}
                show={AlbumPage}
              />
            }
          />
        </Route>
      ) : (
        <Route path="/login" element={<LoginPage />} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Pages;
