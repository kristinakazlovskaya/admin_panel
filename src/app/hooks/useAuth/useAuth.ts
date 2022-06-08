import { useContext } from "react";
import { AuthContext } from "../../hoc/authProvider/AuthProvider";

export default () => useContext(AuthContext);
