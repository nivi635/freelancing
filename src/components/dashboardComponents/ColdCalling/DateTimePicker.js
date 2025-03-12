import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import CustomEditor from "./Editor";
import { Calendar } from "primereact/calendar";

const DateTimePickerModal = ({ visible, onHide }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);
  const dates = ["25 Today", "26 Sun", "27 Mon", "28 Tue", "29 Wed"];
  const hours = ["09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08"];
  const minutes = ["00", "15", "30", "45"];


  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Select Time"
      className="w-[350px] md:w-[400px]"
      closable
      draggable={false}
    >
      {/* Date Selection */}
      <div className="flex justify-center gap-2 mb-4">
      <Calendar
            value={null}
            onChange={(e) => setDateTime(e.value)}
            showIcon
            showTime
            hourFormat="12"
            className="w-full"
          />
      </div>

      {/* Hour Selection */}
      <div className="mb-2">
        <h4 className="text-gray-600">Hours</h4>
        <div className="grid grid-cols-6 gap-2">
          {hours.map((hour, idx) => (
            <button
              key={idx}
              className={`p-2 rounded-md ${
                selectedHour === hour ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedHour(hour)}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>

      {/* Minute Selection */}
      <div className="mb-4">
        <h4 className="text-gray-600">Minutes</h4>
        <div className="flex gap-2">
          {minutes.map((minute, idx) => (
            <button
              key={idx}
              className={`p-2 rounded-md ${
                selectedMinute === minute ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedMinute(minute)}
            >
              {minute}
            </button>
          ))}
        </div>
      </div>

      {/* Text Editor */}
    <CustomEditor/>
      {/* Submit Button */}
      <Button label="Submit" className="w-full" />
    </Dialog>
  );
};

export default DateTimePickerModal;
