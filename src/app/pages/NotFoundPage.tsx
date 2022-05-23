import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div>
        This page does not exist. Go <Link to="/">home</Link>
      </div>
    </>
  );
};

export default NotFoundPage;
