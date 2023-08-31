import React from 'react';

export default function Button(props) {
  const { 
    children = "button", 
    className = "bg-black", 
    onClick = () => {}, 
    type = "button" } = props
  return (
    <button 
      className={`h-10 px-4 font-semibold rounded-md ${className} text-white`} 
      type={type} 
      onClick={onClick}
    >
      {children}
    </button>
  )
}
