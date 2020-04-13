import React from 'react';
import { ColumnProps } from 'antd/lib/table';

const Columns: ColumnProps<any>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <span>{text}</span>,
  },
];

export default Columns;
