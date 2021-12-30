import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import { PAGE_FORGET_ACCOUNT } from "../../../constants/Config";
import { useDispatch } from "react-redux";
import * as usersAction from "../../../actions/user/index";
import api from "../../../api/api";

function FormLogin(props) {
  //
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được để trống !!"
    ),
    password: Yup.string().required("Mật khẩu không được để trống !!"),
  });
  const { remember, loginFast } = props;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <form className="w-full bg-white p-2.5" onSubmit={handleSubmit(async (data) => {
      const result = await api(`users/check/login`, 'POST', {
        emailOrPhone: data.emailOrPhone,
        password: data.password
      }, {});
      if (result.data) {
        localStorage.setItem('user', result.data.token);
        dispatch(usersAction.loginUser(result.data.users));
      }
      else
        setUser(null);
    })} >
      {loginFast ? <div className="w-full flex flex-col justify-center p-3">
        <img
          src="http://res.cloudinary.com/tratahuong01/image/upload/v1623289152/Avatar/d5peo862j01zy9btpuee.jpg"
          className="w-48 mx-auto object-cover h-48 rounded-full"
          alt=""
        />
        <p className="font-semibold text-xl text-center mt-2">Trà Hưởng</p>
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
        error={errors['emailOrPhone']}
      />
      {user === null ? <p className="text-red-500 py-2 text-sm">Tài khoản hoặc mật khẩu không chính xác!!</p> : ''}
      {remember &&
        <div className="w-full my-3 px-3 flex items-center">
          <input type="checkbox" className="transform scale-130 mr-2" />
          <span>Nhớ tài khoản</span>
        </div>
      }
      <ButtonComponent
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
