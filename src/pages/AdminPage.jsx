import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import AdminNavbar from "../components/AdminNavbar";

const AdminPage = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);

  // useEffect(() => {
  //   if (loggedInUser.role !== "ADMIN") navigate("/unauthorized");
  // }, []);

  return (
    <div>
      <AdminNavbar />
    </div>
  );
};

export default AdminPage;
