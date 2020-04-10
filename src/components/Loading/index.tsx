import React, { FC } from 'react';
import Spin from 'antd/lib/spin';
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined';

const Loading: FC = () => {
  const loadingIcon = <LoadingOutlined className="loading-icon" spin />;

  return (
    <section className="loading-section">
      <Spin className="loading-icon" indicator={loadingIcon} />
    </section>
  );
};

export default Loading;
