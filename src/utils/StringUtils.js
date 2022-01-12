export const generateName = (typeGroupMessage, userList, idUser) => {
    let data = [];
    switch (typeGroupMessage) {
        case 0:
            data = userList.filter(dt => dt.id !== idUser);
            if (data.length > 0)
                return `${data[0].firstName} ${data[0].lastName}`;
            break;
        case 1:

            break;
        default:
            return "";
    }
}

export const generateMessage = (typeGroupMessage, messages, userList, idUser) => {
    let data = "";
    if (messages) {
        if (typeGroupMessage === 0) {
            switch (messages.typeMessage) {
                case 0:
                    data = ": " + messages.content;
                    break;
                case 1:
                    data = "đã gửi một hình ảnh";
                    break;
                case 2:
                    data = "đã gửi một nhãn dán";
                    break;
                default:
                    break;
            }
            let user = userList.filter(dt => dt.id !== idUser);
            if (user.length > 0)
                return (messages.userMessage.id === idUser ? "Bạn " : `${user[0].lastName} `) + data;
        }
    }
    else {
        return "Các bạn đã là bạn bè trên facebook";
    }
}