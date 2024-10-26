import React from "react";
import { useForm, Controller, useFieldArray, FieldErrors, UseFormRegister } from "react-hook-form";
import { Switch } from "@headlessui/react";

interface Form3Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  control: any;
}

const Form3: React.FC<Form3Props> = ({ register, errors, control }) => {
  const { fields } = useFieldArray({
    control,
    name: "products.combinations",
  });

  // Helper function to check for duplicate SKUs
  const isDuplicateSKU = (index: number) => {
    const skus = fields.map((field: any) => field.sku);
    const currentSKU = skus[index];
    return skus.indexOf(currentSKU) !== index;
  };

  return (
    <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] w-fit">
      <h3 className="text-xl font-bold mb-4">Combinations</h3>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-[24px] mb-4">
          {/* Name Display */}
          <div className="w-[60px]">
            <p className="text-black  text-[14px] font-[400]">{field.name}</p>
          </div>

          {/* SKU Field */}
          <div className="w-fit">
            <label className="block text-black text-[12px] font-[400]">SKU *</label>
            <input
              type="text"
              {...register(`products.combinations.${index}.sku`, {
                required: "SKU is required",
              })}
              className={`border p-2 rounded w-full text-[12px] font-[400] ${
                isDuplicateSKU(index) ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="SKU"
            />
            {isDuplicateSKU(index) && (
              <p className="text-red-500 text-sm">Duplicate SKU</p>
            )}
          </div>

          {/* In Stock Toggle */}
          <div className="flex items-center justify-center w-fit">
            <label className="mr-2 text-[12px] font-[400]">In stock</label>
            <Controller
              name={`products.combinations.${index}.inStock`}
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value}
                  onChange={field.onChange}
                  className={`${
                    field.value ? "bg-black" : "bg-[#E5E7EB]"
                  } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                  <span
                    className={`${
                      field.value ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition`}
                  />
                </Switch>
              )}
            />
          </div>

          {/* Quantity Field */}
          <div className="w-fit">
            <label className="block text-black text-[12px] font-[400]">Quantity</label>
            <input
              type="number"
              {...register(`products.combinations.${index}.quantity`, {
                min: { value: 0, message: "Quantity must be at least 0" },
              })}
              className="border p-2 rounded text-[12px] font-[400] w-full border-gray-300"
              placeholder="Enter quantity"
            />
            {errors?.products?.combinations?.[index]?.quantity && (
              <p className="text-red-500 text-sm">
                {errors.products.combinations[index].quantity.message}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Form3;
