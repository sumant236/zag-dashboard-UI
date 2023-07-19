import { Progress, Typography } from "antd";
import React, { useEffect, useState } from "react";
import data from "../../../pages/api/mock_data.json";

const { Text, Title } = Typography;

const AllCustomers = () => {
  const [currentCustomerData, setCurrentCustomerData] = useState([]);
  const [targetCustomerData, setTargetCustomerData] = useState([]);
  const [retargetCustomerData, setRetargetCustomerData] = useState([]);
  const [newCustomerData, setNewCustomerData] = useState([]);

  // to calculate percentage for current customers
  const getCurrentCustomerData = () => {
    const currentCustomers = data.dataset.filter(
      (customer) => customer.current_customer
    );
    const percentage = (currentCustomers.length / data.dataset.length) * 100;
    setCurrentCustomerData(Math.round(percentage));
  };

  // to calculate percentage for new customers joined in year 2023
  const getNewcustomerData = () => {
    const newCustomers = data.dataset.filter(
      (date) => new Date(date.date_joined) >= new Date("2023-01-01")
    );
    const percentage = (newCustomers.length / data.dataset.length) * 100;
    setNewCustomerData(Math.round(percentage));
  };

  // to calculate percentage for targeted customers
  const getTargetCustomerData = () => {
    const targetedCustomers = data.dataset.filter(
      (customer) => customer.targeted_customer
    );
    const percentage = (targetedCustomers.length / data.dataset.length) * 100;
    setTargetCustomerData(Math.round(percentage));
  };

  // to calculate percentage for retargeted customers
  const getRetargetCustomerData = () => {
    const retargetedCustomers = data.dataset.filter(
      (customer) => customer.retarget_customer
    );
    const percentage = (retargetedCustomers.length / data.dataset.length) * 100;
    setRetargetCustomerData(Math.round(percentage));
  };

  // to calculate data when page renders
  useEffect(() => {
    getCurrentCustomerData();
    getNewcustomerData();
    getTargetCustomerData();
    getRetargetCustomerData();
  }, []);
  return (
    <div className="py-11 px-9">
      {data && (
        <>
          <Title
            level={4}
            className="font-semibold text-left pb-6 font-poppins"
          >
            All Customers
          </Title>
          <div className="flex gap-7 text-center">
            {/* progress bar for current customers */}
            <div className="flex flex-col">
              <Progress
                type="circle"
                percent={currentCustomerData}
                size={80}
                strokeColor="#5F27CD"
              />
              <Text strong className="text-slate-300 pt-2">
                Current Customers
              </Text>
            </div>
            {/* progress bar for new customers */}
            <div className="flex flex-col">
              <Progress
                type="circle"
                percent={newCustomerData}
                size={80}
                strokeColor="rgba(22, 192, 152, 0.38)"
              />
              <Text strong className="text-slate-300 pt-2">
                New Customers
              </Text>
            </div>
            {/* progress bar for targeted customers */}
            <div className="flex flex-col">
              <Progress
                type="circle"
                percent={targetCustomerData}
                size={80}
                strokeColor="#FF6B6B"
              />
              <Text strong className="text-slate-300 pt-2">
                Target Customers
              </Text>
            </div>
            {/* progress bar for retargeted customers */}
            <div className="flex flex-col">
              <Progress
                type="circle"
                percent={retargetCustomerData}
                size={80}
                strokeColor="#FFC5C5"
              />
              <Text strong className="text-slate-300 pt-2">
                Retarget Customers
              </Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllCustomers;
