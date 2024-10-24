import React, { ChangeEvent } from "react";

interface Form1Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const Form1: React.FC<Form1Props> = ({ formData, updateFormData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Description</h3>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Product name *</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter product name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Category *</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="Shoes">Shoes</option>
          <option value="T-shirt">T-shirt</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Brand *</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter brand"
        />
      </div>

      {/* Upload image */}
      <div className="relative inline-block">
        <button className="flex items-center px-4 py-2 border border-[#1F8CD0] rounded-md text-[#1F8CD0] hover:bg-blue-50">
          Upload Image
          <input
            type="file"
            onChange={(e: any) => updateFormData({ image: e.target.files[0] })}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
};

export default Form1;
