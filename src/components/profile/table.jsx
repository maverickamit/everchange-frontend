import Table from "rc-table";
import React, { useCallback } from "react";
import { observer } from "mobx-react";

const DataTable = ({ userStore }) => {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 150,
    },
    {
      title: "Amount($)",
      dataIndex: "amount",
      key: "amount",
      width: 100,
    },
  ];

  var data = [];

  userStore.user.amountsCharged.map((item, index) => {
    data.push({
      date: new Date(item.dateCharged).toLocaleDateString("en-US"),
      amount: item.amount / 100,
      key: index,
    });
  });
  return (
    <div>
      <Table columns={columns} data={data} scroll={{ y: 100 }} />
    </div>
  );
};

export default observer(DataTable);