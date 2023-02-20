import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const username = localStorage.getItem("USERNAME");
    const password = localStorage.getItem("PASSWORD");

    if (
      !(
        process.env.REACT_APP_USERNAME === username &&
        process.env.REACT_APP_PASSWORD === password
      )
    ) {
      navigate("/");
    }
  }, [navigate]);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
