import React from 'react'

const InputBox = ({name,type,placeholder}) => {
  return (
    <input
    name={name}
    type={type}
    placeholder={placeholder}
    className="bg-white w-full p-2 rounded"
  />
  )
}

export default InputBox