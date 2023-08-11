import React from 'react'

export default function Button(props) {
  const { children = "button", className = "bg-black"} = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${className} text-white`} type="submit">
      {children}
    </button>
  )
}
