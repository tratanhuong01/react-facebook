import React from 'react'


const ItemHeaderContentMessageTop = (props) => {
    return (
        <li className={`${props.mini ? 'w-8 h-8' : 'w-9 h-9'} flex justify-center hover:bg-gray-200 dark:hover:bg-dark-third 
        items-center rounded-full cursor-pointer`}>
            {props.children}
        </li>
    )
}

export default function ContentMessageTop(props) {
    //
    const { mini } = props;
    //
    return (
        <div className={`w-full ${mini ? 'py-1' : ' pt-3 '} flex shadow items-center`}>
            <div className="w-2/3 pl-3 flex items-center">
                <div className="">
                    <div className={`${mini ? 'w-9 h-9' : 'xl:w-10 xl:h-10 w-16 h-16'} my-2  object-cover rounded-full 
                        mx-auto relative `}>
                        <img src="http://res.cloudinary.com/tratahuong01/image/upload/v1627385490/Messenger/AvatarUpdate/1000000025.jpg"
                            alt="" className="xl:w-10 xl:h-10 rounded-full object-cover mx-auto w-16 h-16" />
                        <span className={`${mini ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} rounded-full bg-green-500 absolute bottom-0 
                        ${mini ? '-right-0.5' : 'right-0.5'}`}></span>
                    </div>
                </div>
                <div className="pl-3 flex flex-col">
                    <b className="block dark:text-white inline-block whitespace-nowrap overflow-ellipsis 
                    overflow-hidden max-w-full pr-4">
                        Tuấn Tiền Tỉ
                    </b>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Đang hoạt động</span>
                </div>
            </div>
            <div className="w-1/3 ml-auto">
                <ul className="ml-auto flex float-right pr-1.5">
                    <ItemHeaderContentMessageTop mini={mini}>
                        <svg
                            role="presentation" height={`${mini ? '28px' : '32px'}`} width={`${mini ? '28px' : '32px'}`} viewBox="-5 -5 30 30">
                            <path fill="#692CF2"
                                d="M19.492 4.112a.972.972 0 00-1.01.063l-3.052 2.12a.998.998 0 00-.43.822v5.766a1 1 0 00.43.823l3.051 2.12a.978.978 0 001.011.063.936.936 0 00.508-.829V4.94a.936.936 0 00-.508-.828zM10.996 18A3.008 3.008 0 0014 14.996V5.004A3.008 3.008 0 0010.996 2H3.004A3.008 3.008 0 000 5.004v9.992A3.008 3.008 0 003.004 18h7.992z">
                            </path>
                        </svg>
                    </ItemHeaderContentMessageTop>
                    <ItemHeaderContentMessageTop mini={mini}>
                        <svg
                            role="presentation" height={`${mini ? '28px' : '32px'}`} width={`${mini ? '28px' : '32px'}`}
                            viewBox="-5 -5 30 30">
                            <path fill="#692CF2"
                                d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648a15.9 15.9 0 011.713 1.147c.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z">
                            </path>
                            <path fill="#692CF2"
                                d="M10.952 14.044c.074.044.147.086.22.125a.842.842 0 001.161-.367c.096-.195.167-.185.337-.42.204-.283.552-.689.91-.772.341-.078.686-.105.92-.11.435-.01 1.118.174 1.926.648.824.484 1.394.898 1.713 1.147.224.175.37.43.393.711.042.494-.034 1.318-.754 2.137-1.135 1.291-2.859 1.772-4.942 1.088a17.47 17.47 0 01-6.855-4.212 17.485 17.485 0 01-4.213-6.855c-.683-2.083-.202-3.808 1.09-4.942.818-.72 1.642-.796 2.136-.754.282.023.536.17.711.392.25.32.663.89 1.146 1.714.475.808.681 1.491.65 1.926-.024.31-.026.647-.112.921-.11.35-.488.705-.77.91-.236.17-.226.24-.42.336a.841.841 0 00-.368 1.161c.04.072.081.146.125.22a14.012 14.012 0 004.996 4.996z"
                                stroke="#692CF2">
                            </path>
                        </svg>
                    </ItemHeaderContentMessageTop>
                    {mini ?
                        <>
                            <ItemHeaderContentMessageTop mini={mini}>
                                <svg width="28px" height="28px" viewBox="-4 -4 24 24"><line x1="2" x2="14"
                                    y1="8" y2="8" stroke-linecap="round" stroke-width="2" stroke="#692CF2"></line>
                                </svg>
                            </ItemHeaderContentMessageTop>
                            <ItemHeaderContentMessageTop mini={mini}>
                                <svg width="26px" height="26px" viewBox="-4 -4 24 24"><line x1="2" x2="14" y1="2" y2="14"
                                    stroke-linecap="round" stroke-width="2" stroke="#692CF2"></line><line x1="2" x2="14"
                                        y1="14" y2="2" stroke-linecap="round" stroke-width="2" stroke="#692CF2"></line>
                                </svg>
                            </ItemHeaderContentMessageTop>
                        </> :
                        <ItemHeaderContentMessageTop mini={mini}>
                            <svg
                                fill="#692CF2" role="presentation" height={`${mini ? '24px' : '28px'}`} name="icon" width={`${mini ? '24px' : '28px'}`}
                                viewBox="0 0 36 36">
                                <g transform="translate(18,18)scale(1.2)translate(-18,-18)">
                                    <path fill="#692CF2"
                                        d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z"
                                        stroke="#692CF2">
                                    </path>
                                </g>
                            </svg>
                        </ItemHeaderContentMessageTop>
                    }
                </ul>
            </div>
        </div>
    )
}
