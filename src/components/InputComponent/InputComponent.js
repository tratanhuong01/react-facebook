import React, { forwardRef, useState } from 'react'

export default forwardRef(function InputComponent({ register, wrapper, error, type, name, placeholder, className, search,
    borderValidation, handleChange, disabled, label, width, handleClick }, ref) {
    //
    const [show, setShow] = useState(false);
    const Field = typeof register === "function" ? register(name) : () => "";
    //  
    return (
        <>
            {label && <p className="font-semibold mb-2">{label}</p>}
            {type === "password" || search ?
                <div className={`${wrapper} ${width ? width : 'w-full'} relative`}>
                    <input ref={ref} onClick={() => {
                        if (typeof handleClick === "function") {
                            handleClick();
                        }
                    }} type={show ? "text" : search ? 'text' : "password"} placeholder={placeholder} className={`${width ? width : 'w-full'} ${className} ${borderValidation} 
                    focus:border-blue-600 ${search ? 'pl-10' : ''} dark:border-dark-third rounded-sm border-solid focus:shadow-sm border-gray-200`}
                        {...Field} spellCheck={false} onChange={(event) => {
                            if (typeof handleChange === "function") handleChange(event.target.value);
                            if (typeof register === "function") register(name).onChange(event);
                        }} name={name} autoComplete={"on"} disabled={disabled} />
                    {!search && <span onClick={() => setShow(!show)} className={`bx bx-${show ? 'show' : 'hide'} text-xl text-gray-700 absolute 
                    top-1/2 transform -translate-y-1/2 z-30 right-2 cursor-pointer`}></span>}
                    {search && <span className={`bx bx-search text-xl text-gray-700 absolute 
                    top-1/2 transform -translate-y-1/2 z-30 left-3 cursor-pointer dark:text-white`}></span>}
                </div> :
                <input onClick={() => {
                    if (typeof handleClick === "function") {
                        handleClick();
                    }
                }} type={type} ref={ref} placeholder={placeholder} className={`${width ? width : 'w-full'} ${className} ${borderValidation} focus:border-blue-600 
                border-solid focus:shadow-sm rounded-sm border-gray-200 dark:border-dark-third`}
                    {...Field} spellCheck={false} onChange={(event) => {
                        if (typeof handleChange === "function") handleChange(event.target.value);
                        if (typeof register === "function") register(name).onChange(event);
                    }} name={name} disabled={disabled} />}

            {error &&
                < p className="text-red-600 text-left font-semibold text-sm my-2">{error.message}</p>
            }

        </>
    )
})