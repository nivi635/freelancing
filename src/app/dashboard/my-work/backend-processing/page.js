export default function BackendProcessing() {
  const statuses = [
    { label: "Documentation", color: "#81592f" },
    { label: "Filed", color: "#6b3627" },
    { label: "Pending", color: "#a47d2b" },
    { label: "Approved", color: "#2f6036" },
    { label: "Disbursed", color: "#13161e" },
  ];

  return (
    <div className="flex flex-col items-end flex-wrap ">
      <div>
      <i className="pi pi-list text-lg top- right-0 p-2 cursor-pointer"></i>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-4">
        {statuses.map((item, index) => (
          <div
            key={index}
            className=" rounded-sm border-r-2 border-gray-600  pr-6"
          >
            <div
              key={index}
              className=" flex flex-col justify-center items-center p-4 rounded-md text-white font-bold w-full"
              style={{ backgroundColor: item.color }}
            >
              <div className="flex items-center justify-center w-full">
                <span>{item.label} (0)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
