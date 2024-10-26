import React, { useState } from "react";
import {
  useForm,
  useFieldArray,
  Controller,
  FieldErrors,
  UseFormRegister,
  Control,
} from "react-hook-form";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface Form2Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
}

const Form2: React.FC<Form2Props> = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products.variants",
  });

  // Custom TagInput Component
  const TagInput = ({ value, onChange }: { value: string[]; onChange: (newTags: string[]) => void }) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = () => {
      if (inputValue.trim() !== "") {
        onChange([...value, inputValue.trim()]);
        setInputValue("");
      }
    };

    const handleRemoveTag = (index: number) => {
      const newTags = [...value];
      newTags.splice(index, 1);
      onChange(newTags);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        handleAddTag();
      }
    };

    return (
      <div className="border border-[#d1d1d1] p-2 rounded-[6px] w-full flex  gap-[6px] flex-wrap items-center">
        {value.map((tag, index) => (
          <span key={index} className="flex text-[14px] font-[500] items-center bg-[#efefef] text-black rounded px-[6px] py-[5px] ">
            {tag}
            <button
              type="button"
              className="ml-1 text-black"
              onClick={() => handleRemoveTag(index)}
            >
              &times;
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter values separated by commas"
          className="flex-grow p-1 outline-none"
        />
      </div>
    );
  };

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
        <span className="text-[14px] font-[500] text-[#808080]">Combinations</span>
        <span className="text-gray-400">
          <RiArrowRightSLine />
        </span>
        <span className="text-[14px] font-[500] text-[#808080]">Price info</span>
      </div>

      <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] w-fit">
        <h3 className="text-xl font-bold mb-4">Variants</h3>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-centervv  gap-4 mb-4">
            {/* Option Field */}
            <div className="">
              <label className="block text-gray-700">Option *</label>
              <input
                type="text"
                {...register(`products.variants.${index}.name`, {
                  required: "Option can’t be empty",
                })}
                className={`border px-2 py-3 rounded-[6px] w-full ${
                  errors?.products?.variants?.[index]?.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Enter option"
              />
              {errors?.products?.variants?.[index]?.name && (
                <p className="text-red-500 text-sm">
                  {errors.products?.variants?.[index]?.name?.message}
                </p>
              )}
            </div>

            {/* Values Field as Tags */}
            <div className=" ">
              <label className="block text-gray-700">Values *</label>
              <Controller
                control={control}
                name={`products.variants.${index}.values`}
                rules={{
                  validate: (values) =>
                    (values && values.length > 0) || "Values can’t be empty",
                }}
                render={({ field }) => (
                  <TagInput
                    value={field.value || []}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors?.products?.variants?.[index]?.values && (
                <p className="text-red-500 text-sm">
                  {errors.products?.variants?.[index]?.values?.message}
                </p>
              )}
            </div>

            {/* Remove Option Button */}
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500 mt-[20px] text-[16px] hover:text-red-700"
            >
              <RiDeleteBinLine />
            </button>
          </div>
        ))}

        {/* Add Option Button */}
        <button
          type="button"
          onClick={() => append({ name: "", values: [] })}
          className="text-blue-500 hover:underline font-medium mt-4"
        >
          + Add Option
        </button>
      </div>
    </>
  );
};

export default Form2;
