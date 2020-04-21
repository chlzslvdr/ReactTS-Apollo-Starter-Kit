import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Table from 'antd/lib/table';
import Loading from '../../components/Loading';
import Columns from './Columns';

const EMPLOYEE = gql`
  query {
    employeeLists {
      id
      name
      age
      jobTitle
      jobArea
      state
    }
  }
`;

const EmployeeLists: FC = () => {
  const { loading, error, data } = useQuery(EMPLOYEE, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;
  if (error) return <>Error :(</>;

  return (
    <div className="employeeLists-section">
      <Link to="/test" className="link">
        Back
      </Link>
      <div>Employee Lists</div>
      <Table columns={Columns} dataSource={data.employeeLists} />
    </div>
  );
};

export default EmployeeLists;
