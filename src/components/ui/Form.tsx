import React from 'react'

const Form = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <form action="" className='my-14 space-y-10'>
                {children}
            </form>
        </div>
    )
}

export default Form