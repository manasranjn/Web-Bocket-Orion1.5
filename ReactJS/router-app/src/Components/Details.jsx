import React, { useContext } from "react";
import { example } from "../App";

const Details = () => {
  const name = useContext(example);
  return <div>{name}</div>;
};

export default Details;
