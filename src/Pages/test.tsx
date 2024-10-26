import React, { useState } from "react";

const ToggleSwitch = () => {
  const [selected, setSelected] = useState("%");

  return (
    <div className="inline-flex items-center border border-gray-300 rounded-md overflow-hidden">
      <button
        onClick={() => setSelected("%")}
        className={`px-4 py-2 ${
          selected === "%" ? "bg-blue-100 text-black" : "bg-white text-gray-500"
        }`}
      >
        %
      </button>
      <button
        onClick={() => setSelected("$")}
        className={`px-4 py-2 ${
          selected === "$" ? "bg-blue-100 text-black" : "bg-white text-gray-500"
        }`}
      >
        $
      </button>
    </div>
  );
};

export default ToggleSwitch;
