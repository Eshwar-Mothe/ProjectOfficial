import React, { useEffect, useState, useMemo } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useAdminContext } from "./AdminContext";
import { Table, Input, Button, Typography, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getUsersData } from "../../ApplicationLayer/Api";

const { Title } = Typography;
const { Option } = Select;

// Debounce Hook
function useDebounce(val, delay = 400) {
  const [debounced, setDebounced] = useState(val);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(val), delay);
    return () => clearTimeout(handler);
  }, [val, delay]);
  return debounced;
}

const highlightMatch = (text, input) => {
  if (!input) return text;
  const index = text.toLowerCase().indexOf(input.toLowerCase());
  if (index === 0) {
    const part1 = text.slice(0, input.length);
    const part2 = text.slice(input.length);
    return (
      <span>
        <span style={{ background: "#ffc069" }}>{part1}</span>
        {part2}
      </span>
    );
  }
  return text;
};

const ViewUsers = () => {
  const { allUsers, setAllUsers } = useAdminContext();
  const [loadingUsers, setLoadingUsers] = useState(false);

  // For global search
  const [searchType, setSearchType] = useState("name"); // 'name' | 'phone'
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 400);

  // Data state to render
  const [filtered, setFiltered] = useState([]);
  // Table sort state
  const [sortOrder, setSortOrder] = useState("descend");

  useEffect(() => {
    setLoadingUsers(true);
    const usersData = async () => {
      try {
        const data = await getUsersData()
        setAllUsers(data);
        setFiltered(data);
        setLoadingUsers(false);
      } catch (err) {
        console.log("Error while fetching the users Data", err)
      }
    }
    usersData()
  }, [setAllUsers]);

  useEffect(() => {
    const val = debouncedSearchValue.trim().toLowerCase();
    if (!val) {
      setFiltered(allUsers);
      return;
    }
    setFiltered(
      allUsers.filter((user) =>
        searchType === "name"
          ? user.name && user.name.toLowerCase().startsWith(val)
          : user.phone && user.phone.toString().startsWith(val)
      )
    );
  }, [debouncedSearchValue, searchType, allUsers]);

  // Handle manual search button
  const handleSearch = () => setSearchValue(searchValue);

  // Clear search
  const handleReset = () => setSearchValue("");

  // Table columns
  const columns = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        align: "center",
        render: (text) =>
          searchType === "name" && debouncedSearchValue
            ? highlightMatch(text, debouncedSearchValue)
            : text,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        align: "center",
        render: (text) =>
          searchType === "phone" && debouncedSearchValue
            ? highlightMatch(text.toString(), debouncedSearchValue)
            : text,
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        align: "center",
      },
      {
        title: "State",
        dataIndex: "state",
        key: "state",
        align: "center",
      },
      {
        title: "UID",
        dataIndex: "uid",
        key: "uid",
        align: "center",
        render: (v) => v || "-",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        align: "center",
        defaultSortOrder: "descend",
        sorter: (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        render: (date) => (date ? new Date(date).toLocaleString() : "-"),
      }
    ],
    [debouncedSearchValue, searchType, sortOrder]
  );

  return (
    <div className="view-users">
      <Title level={3} style={{ marginBottom: 0 }}>
        <AiOutlineUsergroupAdd /> All Users
      </Title>

      {/* Global Search Bar under heading */}
      <Space style={{ margin: "18px 0", flexWrap: "wrap" }}>
        <Select value={searchType} style={{ width: 110 }} onChange={setSearchType}>
          <Option value="name">Name</Option>
          <Option value="phone">Phone</Option>
        </Select>
        <Input
          style={{ width: 220 }}
          placeholder={`Search by ${searchType}`}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          allowClear
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          className="btn"
        >
          Search
        </Button>
        {searchValue && (
          <Button onClick={handleReset}>Reset</Button>
        )}
      </Space>

      <Table
        dataSource={filtered}
        columns={columns}
        loading={loadingUsers}
        rowKey={user => user._id}
        pagination={{
          pageSize: 5,
          size: "small",
          showSizeChanger: false,
          position: ["bottomCenter"],
          // Optionally, current, onChange, total for controlled mode if needed
        }}
        scroll={{ x: 'max-content' }}
        locale={{ emptyText: "No users found." }}
      />
    </div>
  );
};

export default ViewUsers;
