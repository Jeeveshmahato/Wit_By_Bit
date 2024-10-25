import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Form4Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form4: React.FC<Form4Props> = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Price & Discount</h3>

      <div className="mb-4">
        <label>Price (INR) *</label>
        <input
          type="number"
          {...register("products.priceInr", { required: "Price is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter price"
        />
        {errors.products?.priceInr && (
          <span className="text-red-500">{errors.products.priceInr.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label>Discount *</label>
        <input
          type="number"
          {...register("products.discount.value", { required: "Discount is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter discount"
        />
        {errors.products?.discount?.value && (
          <span className="text-red-500">{errors.products.discount.value.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label>Discount Method *</label>
        <select
          {...register("products.discount.method", { required: "Discount method is required" })}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="pct">Percentage</option>
          <option value="amt">Amount</option>
        </select>
        {errors.products?.discount?.method && (
          <span className="text-red-500">{errors.products.discount.method.message}</span>
        )}
      </div>
    </div>
  );
};

export default Form4;
