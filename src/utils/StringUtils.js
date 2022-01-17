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

export const generateString = (item, user) => {
    const array = [user.id, item.id];
    array.sort();
    let string = "";
    for (let index = 1; index <= array.length; index++) {
        const element = array[index - 1];
        string += element + (index === array.length ? '' : '-');
    }
    return string;
}
export const generateIDGroupFromListUser = (listUser) => {
    const array = [];
    for (let index = 0; index < listUser.length; index++) {
        const element = listUser[index];
        array.push(element.id);
    }
    array.sort();
    let string = "";
    for (let index = 1; index <= array.length; index++) {
        const element = array[index - 1];
        string += element + (index === array.length ? '' : '-');
    }
    return string;
}