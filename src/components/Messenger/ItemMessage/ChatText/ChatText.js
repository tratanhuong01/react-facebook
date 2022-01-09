import React from "react";

function ChatText(props) {
    //
    const { left, margin, item } = props;
    let style = {
        maxWidth: "75%",
        fontSize: "15px",
        backgroundColor: item.groupMessageMessage.color,
        color: "white",
    };
    if (left) {
        style.backgroundColor = "bg-gray-300 dark:bg-dark-third";
        delete style.color;
    }
    const dataMessage = JSON.parse(item.dataMessage);
    //
    return (
        <div
            className={`relative break-all border-none outline-none ${dataMessage.value ? '' : 'p-1.5'} ${margin} 
            rounded-lg relative dark:text-white ${style.backgroundColor} bg-opacity-80`}
            style={dataMessage.value ? { fontSize: 28 } : style}
        >
            {item.content}
        </div>
    );
}

export default ChatText;