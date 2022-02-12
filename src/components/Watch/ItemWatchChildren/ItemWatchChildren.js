import React from 'react'
import list_icon from '../../../assets/images/list_icon.png';
import CircleIcon from '../../CircleIcon/CircleIcon';

export default function ItemWatchChildren(
    { image, data, multiline, name, handleClick, active, position, right, index }
) {
    //
    //
    return (
        <div onClick={() => {
            if (typeof handleClick === "function") {
                handleClick();
            }
        }} className={`${right ? 'w-1/2 flex-shrink-0 p-4 rounded-lg' : 'w-max md:w-full p-3 md:px-1.5 md:py-1.5'} 
         my-0.5 items-center ${right ? ''
                : `md:hover:bg-gray-200 md:bg-transparent bg-gray-200 dark:hover:bg-dark-third 
                 rounded-full md:rounded-lg`} 
                cursor-pointer ${right ? 'flex' : index > 1 ? 'hidden md:flex' : 'flex'}`}>
            {!image ? <div className={`w-9 h-9 ml-1 rounded-full items-center justify-center
            ${active ? 'bg-main' : 'bg-gray-200'}  ${right ? 'flex' : `hidden md:flex`}`}>
                <div style={{
                    backgroundImage: `url(${list_icon})`,
                    backgroundPosition: ` 0px -${position}px`,
                    backgroundSize: `auto`,
                    width: 20,
                    height: 20,
                    backgroundRepeat: `no-repeat`,
                    display: `inline-block`
                }}></div>
            </div> : image === "icon" ?
                <CircleIcon className={`text-white w-10 h-10 bg-blue-400 text-xl fas fa-play`} /> :
                <img src={data} alt='' className='w-11 h-11 rounded-full object-cover' />}
            <div className={`${right ? 'ml-3' : 'ml-0 md:ml-3'}`}>
                <p className={`font-semibold text-sm dark:text-gray-300`}>{name}</p>
                {multiline && <div className='mt-0.5 text-main text-sm flex items-center items-center'>
                    <span className='w-2 h-2 rounded-full mr-2 bg-main'></span>
                    <span className={`text-sm`}>{multiline}</span>
                </div>}
            </div>
        </div >
    )
}
