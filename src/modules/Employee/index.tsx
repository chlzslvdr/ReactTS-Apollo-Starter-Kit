import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Table from 'antd/lib/table';
import Loading from '../../components/Loading';
import Columns from './Columns';

const EMPLOYEE = gql`
  {
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
  const { loading, error, data } = useQuery(EMPLOYEE);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error :(</p>;
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
