import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import TableComponent from '@/components/dashboardComponents/TableComponent';
export default function BasicDemo() {
    const items = [
        { label: 'All Missed Calls' },
        { label: 'My Missed Calls'}
    ];
    return (
        <div className="card">
            <TabMenu model={items} unstyled={true} />
            <TableComponent />
        </div>
    )
}
