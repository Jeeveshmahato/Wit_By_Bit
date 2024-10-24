import React, { ChangeEvent } from "react";

interface Form4Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const Form4: React.FC<Form4Props> = ({ formData, updateFormData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleDiscountTypeChange = (type: string) => {
    updateFormData({ discount: { ...formData.discount, method: type } });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Price & Discount</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Price (INR) *</label>
        <input
          type="number"
          name="priceInr"
          value={formData.priceInr}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded "
          placeholder="Enter price"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Discount</label>
        <div className="flex items-center">
          <input
            type="text"
            name="discountValue"
            value={formData.discount.value}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded "
            placeholder="Enter discount"
          />
          <div className="ml-2 flex">
            <button
              onClick={() => handleDiscountTypeChange("%")}
              className={`px-4 py-2 border rounded-r-none border-gray-300 font-semibold ${
                formData.discount.method === "%"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-white text-gray-500"
              }`}
            >
              %
            </button>
            <button
              onClick={() => handleDiscountTypeChange("$")}
              className={`px-4 py-2 border rounded-l-none border-gray-300 font-semibold ${
                formData.discount.method === "$"
                  ? "bg-gray-100 text-gray-900"
                  : "bg-white text-gray-500"
              }`}
            >
              $
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form4;
