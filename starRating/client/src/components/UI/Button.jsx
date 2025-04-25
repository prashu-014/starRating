import React from "react";

const Button = ({ name }) => {
  return (
    <button className="border py-2 mt-2 rounded text-white font-semibold cursor-pointer" type="submit">
      {name}
    </button>
  );
};

export default Button;
