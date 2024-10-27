import React from "react";
import { Controller, useFieldArray, FieldErrors, UseFormRegister } from "react-hook-form";
import { Switch } from "@headlessui/react";

interface Combination {
  id: string;
  name: string;
  sku: string;
  quantity: number | null;
  inStock: boolean;
}

interface Form3Props {
  register: UseFormRegister<any>;
  errors: FieldErrors<{
    products: {
      combinations: Combination[];
    };
  }>;
  control: any;
}

const Form3: React.FC<Form3Props> = ({ register, errors, control }) => {
  const { fields } = useFieldArray({
    control,
    name: "products.combinations",
  });

  // Helper function to check for duplicate SKUs
  const isDuplicateSKU = (index: number) => {
    const skus = fields.map((field) => (field as Combination).sku); // Explicitly assert type
    const currentSKU = skus[index];
    return skus.indexOf(currentSKU) !== index;
  };

  return (
    <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px] flex flex-col lg:w-[60%] w-full gap-[24px">
      <h3 className="text-[16px] font-[600] text-black mb-4">Combinations</h3>

      {/* Display Labels Only Once */}
      <div className="flex items-center gap-[24px] mb-4 text-[12px] font-[400] text-black">
        <div className="w-[60px] opacity-0">Name</div>
        <div className="w-[120px]">SKU *</div>
        <div className="w-fit">In stock</div>
        <div className="w-fit">Quantity</div>
      </div>

      {/* Map through fields */}
      {fields.map((field, index) => {
        const combination = field as Combination; // Type assertion for each field

        return (
          <div key={combination.id} className="flex items-center gap-[24px] mb-4">
            {/* Name Display */}
            <div className="w-[60px]">
              <p className="text-black text-[14px] font-[400]">{combination.name}</p>
            </div>

            {/* SKU Field */}
            <div className="w-[120px] ">
              <input
                type="text"
                {...register(`products.combinations.${index}.sku`, {
                  required: "SKU is required",
                })}
                className={`border p-2 rounded-[8px] w-full text-[12px] font-[400] ${
                  isDuplicateSKU(index) ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="SKU"
              />
              {isDuplicateSKU(index) && (
                <p className="text-red-500 text-sm">Duplicate SKU</p>
              )}
              {errors.products?.combinations?.[index]?.sku && (
                <p className="text-red-500 text-sm">
                  {errors.products.combinations[index].sku.message}
                </p>
              )}
            </div>

            {/* In Stock Toggle */}
            <div className="flex items-center justify-center w-fit">
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
              <input
                type="number"
                {...register(`products.combinations.${index}.quantity`, {
                  min: { value: 0, message: "Quantity must be at least 0" },
                })}
                className="border p-2 rounded text-[12px] font-[400] w-full border-gray-300"
                placeholder="Enter quantity"
              />
              {errors.products?.combinations?.[index]?.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.products.combinations[index].quantity.message}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Form3;
