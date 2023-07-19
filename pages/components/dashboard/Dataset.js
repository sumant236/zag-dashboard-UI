import React, { useEffect, useState } from "react";
import data from "../../../pages/api/mock_data.json";
import { Button, Input, Select, Table, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Dataset = () => {
  const [selectedValue, setSelectedValue] = useState(" -- ");
  const [memberData, setMembersData] = useState(data.dataset);
  const [searchingValue, setSearchingValue] = useState("");

  // columns of the data table
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customer_name",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    ,
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Status",
      dataIndex: "status",
      // status to show the member is active or inactive
      render: (params) =>
        params ? (
          <Button className="border-[#00B087] bg-active-btn-green w-21 min-w-full text-[#00B087]">
            Active
          </Button>
        ) : (
          <Button className="border-[#DF0404] bg-inactive-btn-red w-21 min-w-full text-[#DF0404]">
            Inactive
          </Button>
        ),
    },
  ];

  // to handle the sorting
  const handleSelect = (value, option) => {
    setSelectedValue(option.label);
    if (value === "newest") {
      const sortedValue = memberData.sort(
        (a, b) =>
          Date.parse(new Date(a.date_joined.split("-").join(" "))) -
          Date.parse(new Date(b.date_joined.split("-").join(" ")))
      );
      setMembersData(sortedValue);
    } else if (value === "oldest") {
      const sortedValue = memberData.sort(
        (a, b) =>
          Date.parse(new Date(b.date_joined.split("-").join(" "))) -
          Date.parse(new Date(a.date_joined.split("-").join(" ")))
      );
      setMembersData(sortedValue);
    }
  };

  // to handle the search
  const handleSearch = (e) => {
    setSearchingValue(e.target.value);
  };

  const searchData = () => {
    // to reset the table everytime input value changes
    setMembersData(data.dataset);

    // check if searching value is available or not
    if (searchingValue !== "") {
      setMembersData(
        memberData.filter((member) => {
          // Convert the object properties to a string and check if it includes input value
          const memberString = JSON.stringify(member);
          return memberString.includes(searchingValue);
        })
      );
    }
  };

  // to search everytime input value changes
  useEffect(() => {
    searchData();
  }, [handleSearch]);

  return (
    <div className="py-7 pl-10 pr-11">
      <div className="flex justify-between pb-7 items-end">
        <Text className="text-[#16C098] font-poppins">Active Members</Text>
        <div className="flex gap-4">
          {/* search input with icon*/}
          <Input
            prefix={<SearchOutlined style={{ color: "grey" }} />}
            placeholder="Search"
            size="large"
            className="w-2/4 bg-[#F9FBFF]"
            bordered={false}
            onChange={handleSearch}
            value={searchingValue}
          />
          {/* sorting by oldest or newest */}
          <Select
            size="large"
            options={[
              { label: "Newest", value: "newest" },
              { label: "Oldest", value: "oldest" },
            ]}
            className="w-2/4 bg-[#F9FBFF]"
            onChange={handleSelect}
            value={`Sort By: ${selectedValue}`}
            bordered={false}
          />
        </div>
      </div>
      {/* show the data table */}
      {memberData && (
        <Table
          columns={columns}
          dataSource={[...memberData]}
          pagination={{
            defaultPageSize: 6,
            pageSizeOptions: [6, 12, 18, 24],
          }}
        />
      )}
    </div>
  );
};

export default Dataset;
