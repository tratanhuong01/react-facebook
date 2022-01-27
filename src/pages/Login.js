import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent/ButtonComponent";
import EndFormLogin from "../components/Login/EndFormLogin/EndFormLogin";
import FooterLogin from "../components/Login/FooterLogin/FooterLogin";
import FormLogin from "../components/Login/FormLogin/FormLogin";
import SaveLogin from "../components/Login/SaveLogin/SaveLogin";
import { PAGE_HOME } from "../constants/Config";
import { ModalContext } from "../contexts/ModalContext/ModalContext";
import useTitle from "../hooks/useTitle";
import WrapperPage from "./WrapperPage";

function Login(props) {
  //
  const { modalsDispatch, modalsAction } = useContext(ModalContext);
  const user = useSelector((state) => state.user);
  const navigation = useNavigate();
  useEffect(() => {
    //
    if (user) {
      navigation(PAGE_HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  //
  useTitle("Đăng nhập");
  //
  return (
    <WrapperPage white={true} login={true}>
      <div className="w-full relative bg-gray-50">
        <div className="w-full mx-auto sm:w-full md:w-full lg:w-full xl:w-3/4 2xl:w-3/4">
          <SaveLogin />
          <div className="w-full mx-auto rounded-lg mr-8 sm:w-11/12 sm:mx-auto lg:w-36%
            lg:mr-8 items-center flex flex-wrap xl:mt-12">
            <div className="w-full text-center p-2 bg-white rounded-lg shadow-lv1">
              <div className="w-full">
                <FormLogin />
              </div>
              <hr className="w-90% mx-auto mb-4" />
              <div className="w-full">
                <div className="bg-white mb-4">
                  <ButtonComponent
                    handleClick={() => modalsDispatch(modalsAction.openModalRegister())}
                    type="button"
                    className="outline-none px-8 py-3 bg-36A420 text-15px font-semibold text-white rounded-md cursor-pointer"
                  >
                    Tạo Tài Khoản
                  </ButtonComponent>
                </div>
              </div>
            </div>
            <EndFormLogin />
          </div>
          <FooterLogin />
        </div>
      </div>
    </WrapperPage>
  );
}

export default Login;
