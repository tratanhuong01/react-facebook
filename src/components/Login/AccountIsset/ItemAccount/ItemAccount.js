import React, { useContext, useEffect, useRef, useState } from "react";
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
  const refMain = useRef();
  const refLoading = useRef();
  const [loading, setLoading] = useState();
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
    if (refLoading.current && refMain.current) {
      refLoading.current.style.height = refMain.current.offsetHeight + "px";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleLogin = async () => {
    setLoading(true);
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
    setLoading(false);
    return () => {
      unmounted = false;
    }
  }
  //
  return (
    <div
      className="w-1/4 mr-5 mt-5 relative border border-solid relative border-gray-300 hover:shadow-main cursor-pointer"
    >
      <img
        ref={refMain}
        onClick={handleLogin}
        src={item.avatar}
        className="w-full mx-auto object-cover h-40"
        alt=""
      />
      <p onClick={handleLogin} className="font-semibold my-3 text-center text-xm">
        {`${item.firstName} ${item.lastName}`}</p>
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
      items-center bg-red-500 absolute text-xs z-50">
        +9
      </span>
      <div className="w-full flex items-center absolute top-0 left-0 justify-center bg-black bg-opacity-50"
        ref={refLoading} style={{ display: loading ? 'flex' : 'none' }}>
        <i className="fas fa-circle-notch text-xl text-gray-500 mx-9 fa-spin"></i>
      </div>
    </div>
  );
}

export default ItemAccount;
