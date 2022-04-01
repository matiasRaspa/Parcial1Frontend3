import React from "react";

export const Record = ({ lastOption, optionHistory }) => {
  return (
    <>
      <h3>Selección anterior: {lastOption}</h3>
      <h4>Historial de opciones elegidas:</h4>
      <ul>{optionHistory}</ul>
    </>
  );
};
