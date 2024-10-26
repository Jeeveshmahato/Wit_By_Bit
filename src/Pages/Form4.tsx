import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";

interface Form4Props {
  register: UseFormRegister<any>;
  errors: any;
}

const Form4: React.FC<Form4Props> = ({ register, errors }) => {
  const [selected, setSelected] = useState("%");

  return (
    <>
      {/* Steps */}
      <div className="flex items-center space-x-4 mb-8">
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Description
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Variants
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Combinations
        </span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
          Price info
        </span>
      </div>

      <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] lg:w-[60%] w-full">
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

        <div className="mb-4 flex items-center gap-[20px]">
          <div>
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

          <div className="inline-flex self-end items-center h-fit border border-gray-300 rounded-md overflow-hidden">
            <button
              type="button" // Added type="button" to prevent form submission
              onClick={() => setSelected("%")}
              className={`px-4 py-2 ${
                selected === "%" ? "bg-blue-100 text-black" : "bg-white text-gray-500"
              }`}
            >
              %
            </button>
            <button
              type="button" // Added type="button" to prevent form submission
              onClick={() => setSelected("$")}
              className={`px-4 py-2 ${
                selected === "$" ? "bg-blue-100 text-black" : "bg-white text-gray-500"
              }`}
            >
              $
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form4;
