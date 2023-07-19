import { Button, Divider, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React from "react";
import AllCustomers from "../dashboard/AllCustomers.js";
import StatsOverview from "../dashboard/StatsOverview.js";
import Dataset from "../dashboard/Dataset.js";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div className="py-9 pl-9 pr-14 bg-neutral-100">
      <div className="flex justify-between pb-3">
        <Title level={4} className="font-semibold">
          Order
        </Title>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          className="bg-[#1B59F8] flex items-center"
        >
          Add Order
        </Button>
      </div>
      <Divider />
      <div className="flex flex-wrap gap-7">
        {/* All customers data */}
        <div className="bg-white rounded-3xl shadow-[0_10px_61px_0px_rgba(226,236,249,0.50)]">
          <AllCustomers />
        </div>
        {/* Stats overview data */}
        <div className="flex-1 bg-white rounded-3xl shadow-[0_10px_61px_0px_rgba(226,236,249,0.50)]">
          <StatsOverview />
        </div>
        {/* Overall data table */}
        <div className="w-full bg-white rounded-3xl shadow-[0_10px_61px_0px_rgba(226,236,249,0.50)]">
          <Dataset />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
