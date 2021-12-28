import React, { forwardRef } from 'react'

const PopoverHeaderRightWrapper = (props, ref) => {
    return (
        <div ref={ref} className={`w-full rounded-lg absolute dark:bg-dark-second bg-white 
        z-50 top-full mt-0.5 right-3 wrapper-scrollbar overflow-x-hidden overflow-y-auto border-solid border-gray-200 
        lg:w-92 lg:p-0 sm:w-3/4 border-2 lg:w-92 shadow-lv1 dark:border-dark-third`} style={{
                display: props.active === -1 ? 'none' : 'block'
            }}>
            {props.children}
        </div>
    )
}

export default forwardRef(PopoverHeaderRightWrapper);