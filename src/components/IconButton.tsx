import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}
const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex items-center justify-center bg-white shadow-md p-2 hover:scale-110 transition ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
