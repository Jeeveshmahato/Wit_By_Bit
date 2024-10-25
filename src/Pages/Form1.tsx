import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Form1Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form1: React.FC<Form1Props> = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Product Details</h3>

      <div className="mb-4">
        <label>Product Name *</label>
        <input
          {...register("products.name", { required: "Product name is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter product name"
        />
        {errors.products?.name && (
          <span className="text-red-500">{errors.products.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label>Category *</label>
        <select
          {...register("products.category", { required: "Category is required" })}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="Shoes">Shoes</option>
          <option value="T-shirt">T-shirt</option>
        </select>
        {errors.products?.category && (
          <span className="text-red-500">{errors.products.category.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label>Brand *</label>
        <input
          {...register("products.brand", { required: "Brand is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter brand"
        />
        {errors.products?.brand && (
          <span className="text-red-500">{errors.products.brand.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label>Upload Image *</label>
        <input
          type="file"
          {...register("products.image", { required: "Image is required" })}
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errors.products?.image && (
          <span className="text-red-500">{errors.products.image.message}</span>
        )}
      </div>
    </div>
  );
};

export default Form1;
