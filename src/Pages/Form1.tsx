import React from "react";
import { UseFormRegister } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";

interface Form1Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form1: React.FC<Form1Props> = ({ register, errors }) => {
  return (
   <>
   <div className="flex items-center space-x-4 mb-8">
        <span className=" text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Description
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">Variants</span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">
          Price info
        </span>
      </div>
    <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px]">
      <h3 className="text-[16px] font-[600] text-black mb-4">Description</h3>
      
      <div className="mb-4">
        <label>Product Name *</label>

        <input
          {...register("products.name", {
            required: "Product name is required",
          })}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter product name"
        />
        {errors.products?.name && (
          <span className="text-red-500">{errors.products.name.message}</span>
        )}
      </div>

      <div className="mb-4">
        <select
          {...register("products.category", {
            required: "Category is required",
          })}
          className="border border-gray-300 p-2 rounded w-full"
        >
          <option value="Shoes">Shoes</option>
          <option value="T-shirt">T-shirt</option>
        </select>
        {errors.products?.category && (
          <span className="text-red-500">
            {errors.products.category.message}
          </span>
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
   </>
  );
};

export default Form1;
