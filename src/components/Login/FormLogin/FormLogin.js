import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { Link, useNavigate } from "react-router-dom";
import { PAGE_FORGET_ACCOUNT, PAGE_RECOVER_ACCOUNT_VERIFY } from "../../../constants/Config";
import { useDispatch } from "react-redux";
import * as usersAction from "../../../actions/user/index";
import api from "../../../api/api";

function FormLogin(props) {
  //
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const [rememberAccount, setRememberAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const { remember, loginFast } = props;
  const navigation = useNavigate();
  const validationObject = { password: Yup.string().required("Mật khẩu không được để trống !!") }
  const validationSchema = Yup.object().shape(
    !loginFast ? {
      ...validationObject, emailOrPhone: Yup.string().required(
        "Email hoặc số điện thoại không được để trống !!"
      )
    } : rememberAccount ? {} : validationObject);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <form className="w-full bg-white p-2.5" onSubmit={handleSubmit(async (data) => {
      let unmounted = false;
      setLoading(true);
      const result = await api(`users/check/login`, 'POST', {
        emailOrPhone: loginFast ? loginFast.emailOrPhone : data.emailOrPhone,
        password: data.password
      }, {});
      if (result.data.users) {
        if (result.data.status) {
          navigation(PAGE_RECOVER_ACCOUNT_VERIFY + `?token=${result.data.token}`)
        }
        else {
          localStorage.setItem('user', result.data.token);
          let accountList = [];
          if (localStorage && localStorage.getItem("accountList")) {
            if (Array.isArray(JSON.parse(localStorage.getItem("accountList")))) {
              accountList = JSON.parse(localStorage.getItem("accountList"));
            }
          }
          const index = [...accountList].findIndex(dt => dt.id === result.data.users.id);
          if (index === -1) {
            localStorage.setItem("accountList", JSON.stringify([...accountList, {
              avatar: result.data.users.avatar, id: result.data.users.id, emailOrPhone: data.emailOrPhone,
              firstName: result.data.users.firstName, lastName: result.data.users.lastName, token: result.data.token
            }]));
            localStorage.setItem("saveInHome", true);
          }
          if (rememberAccount) {
            let rememberAccountList = [];
            if (localStorage && localStorage.getItem("rememberAccountList")) {
              if (Array.isArray(JSON.parse(localStorage.getItem("rememberAccountList")))) {
                rememberAccountList = JSON.parse(localStorage.getItem("rememberAccountList"));
              }
            }
            localStorage.setItem("rememberAccountList", JSON.stringify([...rememberAccountList, {
              avatar: result.data.users.avatar, id: result.data.users.id, emailOrPhone: data.emailOrPhone,
              firstName: result.data.users.firstName, lastName: result.data.users.lastName, token: result.data.token
            }]));
          }
          dispatch(usersAction.loginUser(result.data.users));
          dispatch({
            type: "UPDATE_TOKEN",
            token: result.data.token
          });
        }
      }
      else
        setUser(null);
      if (!unmounted) setLoading(false);
      return () => {
        unmounted = true;
      }
    })} >
      {loginFast ? <div className="w-full flex flex-col justify-center p-3">
        <img
          src={loginFast.avatar}
          className="w-48 mx-auto object-cover h-48 rounded-full"
          alt=""
        />
        <p className="font-semibold text-xl text-center mt-2">
          {`${loginFast.firstName} ${loginFast.lastName}`}
        </p>
      </div> :
        <InputComponent
          type="text"
          name="emailOrPhone"
          placeholder="Email Hoặc Số Điện Thoại"
          className={`border rounded-md p-3 my-2 ${errors.emailOrPhone ? "border-red-500 text-red-500"
            : "border-gray-200 "}`}
          register={register}
          error={errors['emailOrPhone']}
        />}
      <InputComponent
        type="password"
        name="password"
        placeholder="Mật Khẩu"
        className={`border rounded-md p-3 my-2 ${errors.emailOrPhone ? "border-red-500 text-red-500" : "border-gray-200 "}`}
        register={register}
        error={errors['password']}
      />
      {user === null ? <p className="text-red-500 py-2 text-sm">Tài khoản hoặc mật khẩu không chính xác!!</p> : ''}
      {remember &&
        <div className="w-full my-3 px-3 flex items-center">
          <input type="checkbox" checked={rememberAccount} onChange={(event) => {
            setRememberAccount(event.target.checked)
          }} className="transform scale-130 mr-2" />
          <span>Nhớ tài khoản</span>
        </div>
      }
      <ButtonComponent
        loading={loading}
        disabled={loading}
        className="mx-auto w-full p-3 my-2.5 border-none rounded-md bg-main text-sm text-white font-semibold"
        type="submit"
      >
        Đăng Nhập
      </ButtonComponent>
      <p className="text-main bg-white py-4 bg-white cursor-pointer text-center">
        <Link to={PAGE_FORGET_ACCOUNT}>
          Quên Tài khoản
        </Link>
      </p>
    </form>
  );
}

export default FormLogin;
