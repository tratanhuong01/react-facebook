import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../../InputComponent/InputComponent";
import LabelGender from "./LabelGender";
import ModalWrapper from "../../ModalWrapper";

function ModalRegister(props) {
  //
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Họ không được để trống !!"),
    lastName: Yup.string().required("Tên không được để trống !!"),
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được để trống !!"
    ),
    emailAgain: Yup.string().oneOf(
      [Yup.ref("emailOrPhone"), null],
      "Email phải giống với email trên !!"
    ),
    birthday: Yup.date()
      .nullable("Phải chọn ngày sinh đúng định dạng !!")
      .required("Phải chọn ngày sinh đúng định dạng !!"),
    password: Yup.string()
      .min(6, "Mật khẩu phải tối đa 6 kí tự !!")
      .required("Mật khẩu không được để trống !!"),
    sex: Yup.string()
      .required("Phải chọn giới tính !!")
      .nullable("Phải chọn giới tính !!"),
  });

  const {
    register,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <ModalWrapper
      className={`wrapper-scrollbar p-2 w-11/12 fixed top-1/2 left-1/2 transform 
      -translate-x-1/2 -translate-y-1/2 opacity-100 bg-white z-50 border border-solid 
      border-gray-200 shadow-lv1 rounded-lg sm:w-11/12  lg:w-4/5 xl:w-30%`}
    >
      <h1 className="-pt-1 pb-0.5 text-3xl font-bold">Đăng Kí</h1>
      <p className="pb-2.5 text-sm pt-0.5 text-gray-600">Nhanh Chóng Dễ Dàng</p>
      <hr />
      <form className="mt-2">
        <div className="w-full gap-3 flex">
          <InputComponent
            type="text"
            name="firstName"
            className={`w-1/2 p-2 border my-1 `}
            placeholder="Họ"
          />
          <InputComponent
            type="text"
            name="lastName"
            className={`w-1/2 p-2 border my-1 `}
            placeholder="Tên"
          />
        </div>
        <div className="w-full">
          <InputComponent
            type="text"
            name="emailOrPhone"
            className={`p-2 border my-1`}
            placeholder="Số Di Động Hoặc Email"
          />
        </div>
        {/* {stateEmailAgain === true &&
            <InputComponent
              type="text"
              name="emailAgain"
              className={`border-2 p-1.5  ${errors.emailAgain
                ? " border-red-500 text-red-500"
                : " border-gray-300 "
                } `}
              placeholder="Nhập Lại Email"
            />
          } */}
        <div className="w-full">
          <InputComponent
            type="password"
            name="password"
            className={`p-2 border my-1 `}
            placeholder="Mật Khẩu Mới"
          />
        </div>
        <p className="py-1.5 ml-1 font-semibold text-xs text-gray-700">
          Ngày Sinh
        </p>
        <InputComponent
          type="date"
          name="birthday"
          className=" border-2 p-2"
        />
        <p className="py-1.5 ml-1 font-semibold text-xs text-gray-700">Giới Tính
        </p>
        <div className="w-full flex gap-3 pb-1 mb-2">
          <LabelGender name="gender" value="Nam" register={register} />
          <LabelGender name="gender" value="Nữ" register={register} />
          <LabelGender name="gender" value="Khác" register={register} />
        </div>
        <p className="text-gray-600 text-xs px-1">
          Bằng cách nhấp vào Đăng ký, bạn đồng ý với
          <span style={{ color: "#385989" }}>
            {" "}
            Điều khoản, Chính sách dữ liệu
          </span>{" "}
          và <span style={{ color: "#385989" }}>Chính sách cookie</span> của
          chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và
          hủy nhận bất kỳ lúc nào.
        </p>
        <div className="form_5 text-center p-4">
          <button
            type="submit"
            className="text-xl w-1/2 p-2 font-bold text-sm border rounded-lg 
              text-white cursor-pointer bg-green-500"
            style={{ backgroundColor: "#00a400" }}
          >
            Đăng Kí
          </button>
        </div>
      </form>
    </ ModalWrapper>
  );
}

export default ModalRegister;
