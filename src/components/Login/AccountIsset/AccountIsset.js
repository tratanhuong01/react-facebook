import React from "react";
import AddAccount from "./AddAccount/AddAccount";
import * as Config from "../../../constants/Config";
import ItemAccount from "./ItemAccount/ItemAccount";
AccountIsset.propTypes = {};

function AccountIsset(props) {
  return (
    <div className="w-full">
      <span className="text-3xl font-semibold text-1877F2">
        {Config.NAME_APP} <br />
      </span>
      <div className="w-full mx-auto">
        <p className="text-2xl py-2 font-semibold">Đăng nhập gần đây</p>
        <p className="pb-3 text-gray-500 tex-xm">
          Nhấp vào ảnh của bạn hoặc thêm tài khoản.
        </p>
        <div className="w-full flex flex-wrap">
          <ItemAccount />
          <AddAccount />
        </div>
      </div>
    </div>
  );
}

export default AccountIsset;
