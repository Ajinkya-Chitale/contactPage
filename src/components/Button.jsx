import React from 'react'

const Button = ({icon, text, primary}) => {
  return (
      <button type="button" className={`px-4 py-3 font-semibold rounded ${primary ? "bg-black text-white w-full xl:w-56" : "bg-white text-black w-full border border-black"}`}>{icon} {text}</button>
  )
}

export default Button
