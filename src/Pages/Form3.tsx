import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Form3Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form3: React.FC<Form3Props> = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Combinations</h3>

      <div className="mb-4">
        <label>Combination A (M/Black) *</label>
        <input
          {...register("products.combinations.a.name", { required: "Combination name is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter combination name"
        />
        {errors.products?.combinations?.a?.name && (
          <span className="text-red-500">{errors.products.combinations.a.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label>SKU *</label>
        <input
          {...register("products.combinations.a.sku", { required: "SKU is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter SKU"
        />
        {errors.products?.combinations?.a?.sku && (
          <span className="text-red-500">{errors.products.combinations.a.sku.message}</span>
        )}
      </div>
    </div>
  );
};

export default Form3;
