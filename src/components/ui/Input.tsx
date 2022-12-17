import React from 'react'
import { Callback } from 'yup/lib/types'

interface InputType {
  label?: string,
  placeholder?: string,
  value: number | string | boolean | null,
  type: string,
  handleChange?: Callback,
  errors?: string | null,
  props?: React.ReactNode
}

const Input = ({ label, placeholder, value, type, handleChange, errors, props }: InputType) => {
  return (
    <>
      <div>
        {(() => {
          switch (type) {
            case "text":
              return (
                <input type="text" 
                placeholder={placeholder}
                 className=" border-2 border-gray-200 w-full px-3 py-5 rounded-md text-lg text-gray-500"/>
              )
            case "email":
              return (
                <input type="text" />
              )
            default:
              return (
                <input type="text" placeholder='' />
              )
          }
        })()}
      </div>
    </>
  )
}

export default Input