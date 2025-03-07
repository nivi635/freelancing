import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function BasicDemo() {
    const items = [
        { label: 'All Missed Calls' },
        { label: 'My Missed Calls'}
    ];
    return (
        <div className="card">
            <TabMenu model={items} unstyled={true} />
        </div>
    )
}
