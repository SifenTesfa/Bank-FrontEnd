// src/Protected.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ cmp: Cmp }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate("/register");
    }
  }, [navigate]);

  return (
    <div>
      <Cmp />
    </div>
  );
}

export default Protected;
