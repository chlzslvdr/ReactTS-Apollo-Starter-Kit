import React from 'react';
import { ColumnProps } from 'antd/lib/table';

const Columns: ColumnProps<any>[] = [
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Catchphrase',
    dataIndex: 'catchPhrase',
    key: 'catchPhrase',
    render: (text) => <span>{text}</span>,
  },
];

export default Columns;
