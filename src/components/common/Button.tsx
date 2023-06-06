import React from 'react';
interface MyComponentProps {
  onClick: () => void;
  children: any
}
const Button: React.FC<MyComponentProps> = ({ onClick, children }) => {

  return (
    <button className="bg-dark-purple text-white py-2 px-6 my-10 rounded hover:bg-indigo-700 me-2"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button