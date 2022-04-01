import React from "react";

export const Button = ({ className, classButton, opciones, onClick }) => {
  const showButton = (object) => {
    let res = [];
    for (const property in object) {
      let button = (
        <div key={property} className={className}>
          <button name={property} className={classButton} onClick={onClick}>
            {property.toUpperCase()}
          </button>
          <h2>{object[property]}</h2>
        </div>
      );

      res.push(button);
    }
    return res;
  };

  return showButton(opciones);
};
