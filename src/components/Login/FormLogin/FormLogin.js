import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";
import { PAGE_FORGET_ACCOUNT } from "../../../constants/Config";

function FormLogin(props) {
  //
  const validationSchema = Yup.object().shape({
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được để trống !!"
    ),
    password: Yup.string().required("Mật khẩu không được để trống !!"),
  });
  const { remember } = props;
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <form className="w-full bg-white p-2.5" >
      <InputComponent
        type="text"
        name="emailOrPhone"
        placeholder="Email Hoặc Số Điện Thoại"
        className={`border rounded-md p-3 my-2 ${errors.emailOrPhone ? "border-red-500 text-red-500"
          : "border-gray-200 "}`}
        register={register}
      />
      <InputComponent
        type="password"
        name="password"
        placeholder="Mật Khẩu"
        className={`border rounded-md p-3 my-2 ${errors.emailOrPhone ? "border-red-500 text-red-500" : "border-gray-200 "}`}
        register={register}
      />
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
