import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-yellow-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[8px]`}
    >
      Garanta o seu!
    </button>
  );
};

export default Button;
