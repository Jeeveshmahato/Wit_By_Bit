import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Form2Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form2: React.FC<Form2Props> = ({ register, errors }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Variants</h3>

      <div className="mb-4">
        <label>Size Variants *</label>
        <input
          {...register("products.variants[0].values[0]", { required: "Size is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter size"
        />
        {errors.products?.variants?.[0]?.values?.[0] && (
          <span className="text-red-500">
            {errors.products.variants[0].values[0].message}
          </span>
        )}
      </div>

      <div className="mb-4">
        <label>Color Variants *</label>
        <input
          {...register("products.variants[1].values[0]", { required: "Color is required" })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter color"
        />
        {errors.products?.variants?.[1]?.values?.[0] && (
          <span className="text-red-500">
            {errors.products.variants[1].values[0].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default Form2;
