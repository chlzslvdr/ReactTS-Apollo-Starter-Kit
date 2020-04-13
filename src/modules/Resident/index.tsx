import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Table from 'antd/lib/table';
import Loading from '../../components/Loading';
import Columns from './Columns';

const RESIDENT = gql`
  {
    residentsList {
      id
      name
      age
      gender
      email
      city
    }
  }
`;

const ResidentsList: FC = () => {
  const { loading, error, data } = useQuery(RESIDENT);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error :(</p>;
  return (
    <div className="residentsList-section">
      <Link to="/test" className="link">
        Back
      </Link>
      <div>Residents List</div>
      <Table columns={Columns} dataSource={data.residentsList} />
    </div>
  );
};

export default ResidentsList;
