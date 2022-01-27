import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../../contexts/ModalContext/ModalContext";
import { useDispatch } from "react-redux";
import * as usersAction from "../../../../actions/user/index";
import api from "../../../../api/api";
import jwt_decode from "jwt-decode";

ItemAccount.propTypes = {};

function ItemAccount(props) {
  //
  const { list, setList, item } = props;
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [rememberAccount, setRememberAccount] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    //
    if (localStorage && localStorage.getItem("rememberAccountList")) {
      let rememberAccountList = JSON.parse(localStorage.getItem("rememberAccountList"));
      if (Array.isArray(rememberAccountList)) {
        const index = [...rememberAccountList].findIndex(dt => dt.id === item.id);
        if (index !== -1) {
          setRememberAccount(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleLogin = async () => {
    let unmounted = false;
    if (rememberAccount) {
      const result = await api(`users/token?token=${item.token}`, 'GET', {}, {});
      if (unmounted) return;
      if (result.data.users) {
        const tokenParse = jwt_decode(result.data.token);
        if (tokenParse.exp > Math.floor(new Date() / 1000)) {
          if (result.data.users) {
            localStorage.setItem("user", result.data.token);
            dispatch(usersAction.loginUser(result.data.users));
            dispatch({
              type: "UPDATE_TOKEN",
              token: result.data.token
            });
          }
        }
        modalsDispatch(modalsAction.openModalLogin(item));
      }
    }
    else {
      modalsDispatch(modalsAction.openModalLogin(item));
    }
    return () => {
      unmounted = false;
    }
  }
  //
  return (
    <div
      className="w-1/4 mr-5 mt-5 relative border border-solid border-gray-300 hover:shadow-main cursor-pointer"
    >
      <img
        onClick={handleLogin}
        src={item.avatar}
        className="w-full mx-auto object-cover h-40"
        alt=""
      />
      <p onClick={handleLogin} className="font-semibold my-3 text-center text-xm">{`${item.firstName} ${item.lastName}`}</p>
      <span
        onClick={() => {
          const backup = [...list].filter(dt => dt.id !== item.id);
          if (backup.length > 0) {
            localStorage.setItem("accountList", JSON.stringify([...backup]));
            if (localStorage.getItem("rememberAccountList")) {
              const rememberAccountList = JSON.parse(localStorage.getItem("rememberAccountList"));
              if (Array.isArray(rememberAccountList)) {
                localStorage.setItem("rememberAccountList",
                  JSON.stringify([...rememberAccountList].filter(dt => dt.id === item.id)));
              }
            }
          }
          else {
            localStorage.removeItem("accountList");
            localStorage.removeItem("rememberAccountList");
          }
          setList([...backup]);
        }}
        className="absolute top-1 left-1 cursor-pointer px-1.5 flex  items-center hover:bg-white hover:-left-2 
        rounded-full bg-gray-100 cursor-pointer font-semibold justify-center transform hover:scale-125 hover:-top-2 ">
        &times;</span>
      <span className="text-white font-bold w-6 h-6 rounded-full -top-1.5 -right-1.5 flex justify-center 
      items-center bg-red-500 absolute text-xs">
        +9
      </span>
    </div>
  );
}

export default ItemAccount;
