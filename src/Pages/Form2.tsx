// Form2.tsx
import React, { useState } from "react";
import { Controller, useFieldArray, FieldErrors, UseFormRegister, Control } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";

interface Form2Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: Control<any>;
}

const Form2: React.FC<Form2Props> = ({ register, errors, control }) => {
  const { fields, append, remove } = useFieldArray({ control, name: "products.variants" });

  const TagInput = ({ value, onChange }: { value: string[]; onChange: (newTags: string[]) => void }) => {
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = () => {
      if (inputValue.trim()) {
        onChange([...value, inputValue.trim()]);
        setInputValue("");
      }
    };

    const handleRemoveTag = (index: number) => {
      const newTags = [...value];
      newTags.splice(index, 1);
      onChange(newTags);
    };

    return (
      <div className="border p-2 rounded  flex gap-2 flex-wrap items-center ">
        {value.map((tag, index) => (
          <span key={index} className="bg-gray-200 p-1 rounded flex items-center">
            {tag}
            <button onClick={() => handleRemoveTag(index)}>&times;</button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
          placeholder="Add value"
          className="flex-grow"
        />
      </div>
    );
  };

  return (
    <div className=" shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] flex flex-col lg:w-[65%] w-full gap-[24px]">
      <h3 className="text-[16px] font-[600] text-black mb-4">Variants</h3>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-4 mb-4">
          <input
            {...register(`products.variants.${index}.name`, { required: "Option is required" })}
            className="border p-2 rounded"
            placeholder="Enter option"
          />
          <Controller
            control={control}
            name={`products.variants.${index}.values`}
            render={({ field }) => (
              <TagInput value={field.value || []} onChange={field.onChange} />
            )}
          />
          <button onClick={() => remove(index)} className="text-red-500"><RiDeleteBinLine /></button>
        </div>
      ))}
      <button onClick={() => append({ name: "", values: [] })} className="text-blue-500">
        + Add Option
      </button>
    </div>
  );
};

export default Form2;
