import React from 'react'

const FormWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <div className='my-14 space-y-10 pr-14'>
                {children}
            </div>
        </div>
    )
}

export default FormWrapper