import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (
      sessionStorage.getItem("user") === null ||
      sessionStorage.getItem("user").length === 0
    ) {
      navigate(RoutePaths.Home);
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
