import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFoundPage } from "app/pages";

const Crud: React.FC<{
  create: React.FC;
  list: React.FC;
  show: React.FC;
  edit: React.FC;
}> = ({ create, list, show, edit }) => {
  return (
    <Routes>
      {list && <Route index element={React.createElement(list)} />}
      {show && <Route path=":id/*" element={React.createElement(show)} />}
      {edit && <Route path=":id/edit/*" element={React.createElement(edit)} />}
      {create && (
        <Route path="create/*" element={React.createElement(create)} />
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Crud;
