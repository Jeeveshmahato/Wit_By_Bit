import React, { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface Form4Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<{
    products: { priceInr: number; discount: { value: number } };
  }>;
}

const Form4: React.FC<Form4Props> = ({ register, errors }) => {
  const [discountType, setDiscountType] = useState("%");

  return (
    <div className=" shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] flex flex-col lg:w-[60%] w-full gap-[24px">
      <h3 className="text-[16px] font-[600] mb-4">Price Info</h3>
      <div>
        <label className=" text-[14px] font-[400]" htmlFor="">
          Price *
        </label>
        <input
          type="number"
          {...register("products.priceInr", { required: "Price is required" })}
          placeholder="Enter Price (INR)"
          className="border p-2 rounded w-full"
        />
      </div>
      {/* Correctly accessing priceInr error with optional chaining */}
      {errors?.products?.priceInr && (
        <p className="text-red-500">{errors.products.priceInr.message}</p>
      )}

      <div className=" mt-[24px]">
        <label className=" text-[14px] font-[400]" htmlFor="">
          Discount
        </label>

        <div className="flex gap-4 items-center mt-4">
          <input
        
            type="number"
            {...register("products.discount.value", {
              required: "Discount is required",
            })}
            placeholder="Enter discount"
            className="border p-2 rounded w-full"
          />
          {/* Correctly accessing discount.value error with optional chaining */}
          {errors?.products?.discount?.value && (
            <p className="text-red-500">
              {errors.products.discount.value.message}
            </p>
          )}

          <div className="inline-flex">
            <button
              type="button"
              onClick={() => setDiscountType("%")}
              className={`${
                discountType === "%" ? "bg-blue-100" : "bg-white"
              } px-4 py-2`}
            >
              %
            </button>
            <button
              type="button"
              onClick={() => setDiscountType("$")}
              className={`${
                discountType === "$" ? "bg-blue-100" : "bg-white"
              } px-4 py-2`}
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
