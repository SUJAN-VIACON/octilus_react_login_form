import React from 'react'

const Button = ({ title, type, handleOnClick }: { title: string, type: any, handleOnClick: any }) => {
    return (
        <>
            <button
                onClick={handleOnClick}
                type={type}
                className=' px-28 py-7 rounded-lg bg-primary text-white font-bold text-lg'
            >{title}</button>
        </>
    )
}

export default Button