import React from 'react'

export default function Feels(props) {
    //
    const { setFeel, allFeel, comment } = props;
    //
    return (
        <div className="p-2 z-40 absolute bottom-full item__block -left-4" style={{ width: comment ? 340 : 'auto' }}>
            <ul className="flex flex-column dark:bg-dark-second bg-white rounded-full border-solid 
                        dark:border-dark-third border-gray-300 border rounded-3xl">
                {allFeel.map((feel, index) =>
                    <li onClick={() => setFeel(feel)} key={index} className="p-1 cursor-pointer rounded-full hover:bg-gray-200 
                    dark:hover:bg-dark-third relative item__hover">
                        <span className="p-1 text-xs item__block rounded-full hidden bg-black text-white font-semibold 
                        absolute bottom-full mb-2 left-0"
                            style={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}>
                            {feel.label}
                        </span>
                        <img src={feel.image} alt="" className={`w-10 h-10 hover:w-11 hover:w-11 rounded-full object-cover`} />
                    </li>
                )}
            </ul>
        </div>
    )
}
