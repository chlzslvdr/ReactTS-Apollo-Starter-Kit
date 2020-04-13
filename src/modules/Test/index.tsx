import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HomeFilled, FundFilled, MailFilled } from '@ant-design/icons';

const Test: FC = () => {
  return (
    <div className="test-section">
      <Link to="/company" className="link">
        <button className="button">
          <FundFilled />
          Company Lists
        </button>
      </Link>

      <Link to="/employee" className="link">
        <button className="button">
          <MailFilled />
          Employee Lists
        </button>
      </Link>

      <Link to="/resident" className="link">
        <button className="button">
          <HomeFilled />
          Residents List
        </button>
      </Link>
    </div>
  );
};

export default Test;
