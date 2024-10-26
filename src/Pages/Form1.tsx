import React from "react";
import { UseFormRegister } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";
import UploadImage from '../assets/Upload_image.png'

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
      <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] flex flex-col lg:w-[60%] w-full gap-[24px]">
        <h3 className="text-[16px] font-[600] text-black mb-4">Description</h3>

        <div className=" flex flex-col gap-[4px]">
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

        <div className=" flex flex-col gap-[4px]">
          <label>Category *</label>

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

        <div className=" flex flex-col gap-[4px]">
          <label>Brand *</label>
          <input
            {...register("products.brand", { required: "Brand is required" })}
            className="border border-gray-300 p-2 rounded w-full"
            placeholder="Enter brand"
          />
          {errors.products?.brand && (
            <span className="text-red-500">
              {errors.products.brand.message}
            </span>
          )}
        </div>
        <div className="flex flex-col w-fit gap-1">
          <label className="flex gap-[6px] items-center justify-center  border-[1px] border-[#1f8cd0] text-[#1f8cd0] text-[16px] font-[600] py-[11px] px-[18px] rounded-[8px] cursor-pointer">
            <img src={UploadImage} alt="" />
            Upload Image
            <input
              type="file"
              {...register("products.image", { required: "Image is required" })}
              className="hidden"
            />
          </label>
          {errors.products?.image && (
            <span className="text-red-500">
              {errors.products.image.message}
            </span>
          )}
        </div>
        {/* <div className=" flex flex-col gap-[4px]">
          <input
            type="file"
            {...register("products.image", { required: "Image is required" })}
            className="border border-gray-300 p-2 rounded w-full"
          />
          {errors.products?.image && (
            <span className="text-red-500">
              {errors.products.image.message}
            </span>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Form1;
