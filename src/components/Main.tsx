import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ControlledTabsExample() {
  const [key, setKey] = useState('table');
  const tabItems = ['requirements', 'table', 'docs'];

  return (
    <Tabs
      id="fill-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k as string)} //typescript
      className="mb-3"
    >
      {tabItems.map((tab) => (
        <Tab key={tab} eventKey={tab} title={tab}>
          `Tab content for {tab}`
        </Tab>
      ))}
    </Tabs>
  );
}

interface MainProps {
  style?: React.CSSProperties;
}
const Main: React.FC<MainProps> = ({ style }) => {
  return (
    <div className="Aside bg-dark p-2" style={{ ...style }}>
      <ControlledTabsExample />
    </div>
  );
};
export default Main;
