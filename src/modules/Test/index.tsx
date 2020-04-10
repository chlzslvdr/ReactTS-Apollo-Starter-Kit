import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import Loading from '../../components/Loading';

const COMPANY = gql`
  {
    allCompanies {
      id
      companyName
      country
      catchPhrase
    }
    allEmployees {
      id
      email
      userName
      description
      city
    }
  }
`;

const Test: FC = () => {
  const { loading, error, data } = useQuery(COMPANY);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p>Error :(</p>;

  return (
    <div className="test-section">
      <div className="company-info-container">
        <div className="heading">Companies</div>
        {data.allCompanies.map((item: any) => (
          <div key={item.id} className="company-info">
            <span key={item.companyName} className="title">
              Company Name:
            </span>
            <span className="label">{item.companyName}</span>
            <span key={item.catchPhrase} className="title">
              Catch Phrase:
            </span>
            <span className="label">{item.catchPhrase}</span>
            <span key={item.country} className="title">
              Country:
            </span>
            <span className="label">{item.country}</span>
          </div>
        ))}
      </div>

      <div className="company-employees-container">
        <div className="heading">Employees</div>
        {data.allEmployees.map((item: any) => (
          <div key={item.id} className="employee-info">
            <span key={item.userName} className="title">
              Name:
            </span>
            <span className="label">{item.userName}</span>
            <span key={item.email} className="title">
              Email:
            </span>
            <span className="label">{item.email}</span>
            <span key={item.description} className="title">
              Description:
            </span>
            <span className="label">{item.description}</span>
            <span key={item.city} className="title">
              City:
            </span>
            <span className="label">{item.city}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
