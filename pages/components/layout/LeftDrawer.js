import React from "react";
import logo from "../../../images/logo.png";
import ReportsIcon from "../../../images/reportsIcon.svg";
import SettingsIcon from "../../../images/settingsIcon.svg";
import WorkspaceIcon from "../../../images/workspaceIcon.svg";
import { Menu } from "antd";
import Image from "next/image";

const LeftDrawer = () => {
  // menu list items in left navbar
  const items = [
    {
      key: "reports",
      label: "Reports",
      icon: <Image src={ReportsIcon} alt="reports icon" />,
    },
    {
      key: "workspace",
      label: "Workspaces",
      icon: <Image src={WorkspaceIcon} alt="workspace icon" />,
    },
    {
      key: "setting",
      icon: <Image src={SettingsIcon} alt="settings icon" />,
      label: "Settings",
    },
  ];

  return (
    <div className="bg-red rounded-xl shadow-[0_5px_20px_0px_rgba(0,0,0,0.05)] h-full px-7 py-7">
      {/* logo image */}
      <Image
        src={logo}
        alt="logo"
        className="m-auto w-18"
        priority
        width={73}
        height={47}
      />
      {/* menu to select */}
      <Menu selectedKeys={["workspace"]} mode="inline" items={items} />
    </div>
  );
};

export default LeftDrawer;
