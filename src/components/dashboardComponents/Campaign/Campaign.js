import React from "react";
import { TabMenu } from "primereact/tabmenu";
export default function Campaign({ activeIndex, setActiveIndex }) {
  const items = [
    { label: "Active" },
    { label: "Open" },
    { label: "Completed" },
    { label: "Data Lake" },
  ];

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Active />;
      case 1:
        return <Open />;
      case 2:
        return <Completed />;
      case 3:
        return <DataLake />;
      default:
        return <Active />;
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="mt-2 ml-3 font-bold text-base">Runners</div>
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        unstyled={true}
      />

      {renderContent()}
    </div>
  );
}

function Active() {
  return (
    <div>
      <h2>My Active</h2>
    </div>
  );
}

function Open() {
  return (
    <div>
      <h2>Open Component</h2>
    </div>
  );
}
function Completed() {
  return (
    <div>
      <h2>Completed Component</h2>
    </div>
  );
}
function DataLake() {
  return (
    <div>
      <h2>Data Lake</h2>
    </div>
  );
}
