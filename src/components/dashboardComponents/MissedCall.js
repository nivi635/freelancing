
import React from 'react';
import { TabMenu } from 'primereact/tabmenu';
import TableComponent from '@/components/dashboardComponents/TableComponent';

export default function MissedCall({ activeIndex, setActiveIndex }) {
  const items = [
    { label: 'All Missed Calls' },
    { label: 'My Missed Calls' }
  ];

  return (
    <div>
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        unstyled={true}
      />
      {activeIndex === 0 ? <TableComponent /> : <MyMissedCallsComponent />}
    </div>
  );
}

function MyMissedCallsComponent() {
  return (
    <div>
      <h2>My Missed Calls</h2>
    </div>
  );
}
