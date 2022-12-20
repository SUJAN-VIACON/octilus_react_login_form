import { useState } from 'react'

const RadioInput = ({ checked = false, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked) as any
    return (
        <>
            <input type="radio" {...props} className=" hidden"
                onChange={(e) => setIsChecked((e: any) => {
                    return e ? false : !e;
                })} />
            <label htmlFor={props.id} className={`w-5 h-5 rounded-md ${isChecked ? 'bg-primary' : 'bg-gray-300'} `}>
            </label>
        </>
    )
}

export default RadioInput