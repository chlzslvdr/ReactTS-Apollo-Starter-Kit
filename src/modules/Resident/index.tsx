import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Table from 'antd/lib/table';
import Loading from '../../components/Loading';
import Columns from './Columns';

const RESIDENT = gql`
  query {
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
  const { loading, error, data } = useQuery(RESIDENT, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loading />;
  if (error) return <>Error :(</>;

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
