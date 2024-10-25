import React from "react";
import { UseFormRegister } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";

interface Form3Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form3: React.FC<Form3Props> = ({ register, errors }) => {
  return (
   <>
    {/* Steps */}
    <div className="flex items-center space-x-4 mb-8">
        <span className=" text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Description
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">Variants</span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">Price info</span>
      </div>
    <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px]">
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
   </>
  );
};

export default Form3;
