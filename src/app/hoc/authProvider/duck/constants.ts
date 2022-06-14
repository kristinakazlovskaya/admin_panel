const isAuthorized = () => {
  if (localStorage.getItem("fake-token")) {
    return true;
  }

  return false;
};

export default isAuthorized;
