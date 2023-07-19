import { Progress, Typography } from "antd";
import React from "react";

const { Text, Title } = Typography;

const StatsOverview = () => {
  return (
    <div className="py-11 px-9 text-left">
      <Title level={4} className="font-semibold pb-6 font-poppins">
        Stats Overview
      </Title>
      {/* progress bar for active members */}
      <div className="pb-6">
        <Text strong className="text-slate-300">
          Active
        </Text>
        <Progress percent={63} strokeColor="rgba(22, 192, 152, 0.38)" />
      </div>
      {/* progress bar for inactive customers */}
      <div>
        <Text strong className="text-slate-300">
          Inactive
        </Text>
        <Progress percent={88} strokeColor="#FF6B6B" />
      </div>
    </div>
  );
};

export default StatsOverview;
