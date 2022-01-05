import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputComponent from "../../../InputComponent/InputComponent";
import LabelGender from "./LabelGender";
import ModalWrapper from "../../ModalWrapper";
import { PAGE_VERIFY_CODE_ACCOUNT_REGISTER, REGEX_EMAIL, REGEX_PHONE } from "../../../../constants/Config";
import api from "../../../../api/api";
import { ModalContext } from "../../../../contexts/ModalContext/ModalContext";
import { useNavigate } from "react-router-dom";

function ModalRegister(props) {
  //
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Họ không được để trống !!"),
    lastName: Yup.string().required("Tên không được để trống !!"),
    emailOrPhone: Yup.string().required(
      "Email hoặc số điện thoại không được để trống !!"
    ).test('test-name', 'Email hoặc số điện thoại không hợp lệ !!',
      function (value) {
        let isValidEmail = REGEX_EMAIL.test(value);
        let isValidPhone = REGEX_PHONE.test(value);
        if (!isValidEmail && !isValidPhone) {
          return false;
        }
        return true;
      }),
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
    gender: Yup.string()
      .required("Phải chọn giới tính !!").default("Nam"),
  });
  const navigation = useNavigate();
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const [errorsIsset, setErrorsIsset] = useState(null);
  const [emailAgain, setEmailAgain] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange"
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
      <form onSubmit={handleSubmit(async (data) => {
        modalsDispatch(modalsAction.loadingModal(true));
        let result = await api(`users/check/register?emailOrPhone=${data.emailOrPhone}`, 'POST',
          null, {});
        if (result.data) {
          modalsDispatch(modalsAction.loadingModal(false));
          setErrorsIsset("Email hoặc số điện thoại đã tồn tại !!");
          setEmailAgain(false);
        }
        else {
          setEmailAgain(null);
          setErrorsIsset(false);
          result = await api(`users`, 'POST', {
            id: null,
            firstName: data.firstName,
            lastName: data.lastName,
            birthday: '2021-12-29 14:57:49.728',
            gender: data.gender,
            isOnline: 0,
            isTick: 0,
            password: data.password,
            avatar: "https://res.cloudinary.com/ensonet-dev/image/upload/v1641124176/default-avatar_leprc2.png",
            cover: null,
            codeEmail: null,
            codePhone: null,
            timeCreated: null,
            description: null,
            isDark: 0,
            email: REGEX_EMAIL.test(data.emailOrPhone) ? data.emailOrPhone : null,
            phone: REGEX_PHONE.test(data.emailOrPhone) ? data.emailOrPhone : null
          }, {});
          if (result.data) {
            const id = result.data.id;
            const emailOrPhone = REGEX_EMAIL.test(data.emailOrPhone) ? 'email' : 'phone';
            result = await api(`send/code/${emailOrPhone}?${emailOrPhone}=${data.emailOrPhone}`, 'POST', null, {});
            result = await api(`users/generate/jwt`, 'POST', {
              emailOrPhone: data.emailOrPhone,
              time: 3600,
              type: 0,
              code: result.data,
              id: id
            }, {});
            navigation(`${PAGE_VERIFY_CODE_ACCOUNT_REGISTER}?token=${result.data}`)
            modalsDispatch(modalsAction.loadingModal(true));
          }
          else {
            alert("Error System!!")
          }
        }
      })} className="mt-2">
        <div className="w-full gap-3 flex">
          <div className="w-1/2">
            <InputComponent
              register={register}
              error={errors["firstName"]}
              type="text"
              name="firstName"
              className={`w-full p-2 border my-1 `}
              placeholder="Họ"
            />
          </div>
          <div className="w-1/2">
            <InputComponent
              register={register}
              error={errors["lastName"]}
              type="text"
              name="lastName"
              className={`w-full p-2 border my-1 `}
              placeholder="Tên"
            />
          </div>
        </div>
        <div className="w-full">
          <InputComponent
            register={register}
            error={errors["emailOrPhone"]}
            type="text"
            name="emailOrPhone"
            handleChange={value => {
              setErrorsIsset(false);
              setEmailAgain(REGEX_EMAIL.test(value))
            }}
            className={`p-2 border my-1`}
            placeholder="Số Di Động Hoặc Email"
          />
        </div>
        {errorsIsset && <p className='text-red-600 font-semibold text-sm my-2'>{errorsIsset}</p>}
        {emailAgain &&
          <div className="w-full">
            <InputComponent
              register={register}
              error={errors['emailAgain']}
              type="text"
              name="emailAgain"
              className={`p-2 border my-1`}
              placeholder="Nhập Lại Email"
            />
          </div>
        }
        <div className="w-full">
          <InputComponent
            register={register}
            error={errors["password"]}
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
          register={register}
          error={errors["birthday"]}
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
        {errors["gender"] && <p className='text-red-600 font-semibold text-sm my-2'>{errors["gender"].message}</p>}
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
    </ ModalWrapper >
  );
}

export default ModalRegister;
