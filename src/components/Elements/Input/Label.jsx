import React from 'react'

export default function Label(props) {

  const { htmlFor, children } = props;

  return (
    <label 
      htmlFor={htmlFor} 
      className="block text-state-700 text-sm font-semibold"
    >
      {children}
    </label>
  )
}
