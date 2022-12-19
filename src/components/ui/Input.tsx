import { Callback } from 'yup/lib/types'
import React from 'react'

interface InputType {
  label?: string,
  placeholder?: string,
  name: string,
  value: any,
  type: string,
  handleChange?: any,
  error?: string | null,
  isChecked?:boolean,
  props?: React.ReactNode
}

const Input = ({ label, placeholder, name, value, type, handleChange, error,isChecked, props }: InputType) => {
  return (
    <>
      <div>
        {(() => {
          switch (type) {
            case "text":
              return (
                <div className='relative'>
                  <input type="text"
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    id={name}
                    onChange={handleChange}
                    className=" border-2 border-gray-200 w-full px-3 py-5 rounded-md text-lg text-gray-500" />
                  {error &&
                    <span className='text-red-400 pt-1 absolute bottom-[-1.3rem] right-0 w-full text-xs'>
                      {error}
                    </span>
                  }
                </div>
              )
            case "email":
              return (
                <div className='relative'>
                  <input type="email"
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    id={name}
                    onChange={handleChange}
                    className=" border-2 border-gray-200 w-full px-3 py-5 rounded-md text-lg text-gray-500"
                  />
                  {
                    error &&
                    <span className='text-red-400 pt-1 absolute bottom-[-1.3rem] right-0 w-full text-xs'>
                      {error}
                    </span>
                  }
                </div>

              )
            case "number":
              return (<div className='relative'>
                <input type="number"
                  placeholder={placeholder}
                  value={value}
                  name={name}
                  id={name}
                  onChange={handleChange}
                  className=" border-2 border-gray-200 w-full px-3 py-5 rounded-md text-lg text-gray-500"
                />
                {
                  error &&
                  <span className='text-red-400 pt-1 absolute bottom-[-1.3rem] right-0 w-full text-xs'>
                    {error}
                  </span>
                }
              </div>
              )
            case "radio":
              return (
                <div className='relative'>
                  <div className='flex items-center gap-5 p-5 border-2 border-gray-200 w-36 rounded'>
                    <input
                      type="radio" className='w-5 h-5'
                      value={value}
                      name={name}
                      id={`name-${label}`}
                      defaultChecked={isChecked}
                      onChange={handleChange}
                    />
                    <label htmlFor={`name-${label}`} className='text-gray-300 text-lg font-semibold'>{label}</label>
                  </div>
                  {
                    error &&
                    <span className='text-red-400 pt-1 absolute bottom-[-1.3rem] right-0 w-full text-xs'>
                      {error}
                    </span>
                  }
                </div>
              )
            case "radio2":
              return (
                <div className='relative'>
                  <div className='flex items-center gap-5'>
                    <input
                      type="radio" className='w-5 h-5 accent-primary'
                      value={value}
                      name={name}
                      id={`name-${label}`}
                      onChange={handleChange}
                    />
                    <label htmlFor={`name-${label}`} className='text-lg'>{label}</label>
                  </div>
                  {
                    error &&
                    <span className='text-red-400 pt-1 absolute bottom-[-1.3rem] right-0 w-full text-xs'>
                      {error}
                    </span>
                  }
                </div>
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