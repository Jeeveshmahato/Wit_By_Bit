import React, { useState } from "react";

interface Form2Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const Form2: React.FC<Form2Props> = ({ formData, updateFormData }) => {
  const [errors, setErrors] = useState<{ name: boolean; values: boolean }[]>(
    formData.variants.map(() => ({ name: false, values: false }))
  );
  const [newValue, setNewValue] = useState<string>(""); // For handling input for new values

  const handleOptionChange = (index: number, option: string) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index].name = option;
    updateFormData({ variants: updatedVariants });

    // Validation
    const updatedErrors = [...errors];
    updatedErrors[index].name = option.trim() === "";
    setErrors(updatedErrors);
  };

  const handleValuesChange = (index: number, values: string[]) => {
    const updatedVariants = [...formData.variants];
    updatedVariants[index].values = values;
    updateFormData({ variants: updatedVariants });

    // Validation
    const updatedErrors = [...errors];
    updatedErrors[index].values = values.length === 0;
    setErrors(updatedErrors);
  };

  const addValue = (index: number) => {
    if (newValue.trim() !== "") {
      const updatedValues = [
        ...formData.variants[index].values,
        newValue.trim(),
      ];
      handleValuesChange(index, updatedValues);
      setNewValue(""); // Clear the input after adding
    }
  };

  const removeValue = (index: number, valueToRemove: string) => {
    const updatedValues = formData.variants[index].values.filter(
      (value: string) => value !== valueToRemove
    );
    handleValuesChange(index, updatedValues);
  };

  const addVariant = () => {
    const newVariant = { name: "", values: [] };
    updateFormData({ variants: [...formData.variants, newVariant] });
    setErrors([...errors, { name: true, values: true }]); // Add validation errors for the new variant
  };

  const removeVariant = (index: number) => {
    const updatedVariants = formData.variants.filter(
      (_: any, i: number) => i !== index
    );
    updateFormData({ variants: updatedVariants });

    const updatedErrors = errors.filter((_, i) => i !== index);
    setErrors(updatedErrors); // Remove validation for deleted variant
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Variants</h3>
      {formData.variants.map((variant: any, index: number) => (
        <div key={index} className="flex flex-row gap-4  items-center w-full   mb-4">
          <div className=" ">
            <label className="block text-gray-700">Option *</label>
            <input
              type="text"
              required
              value={variant.name}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className={`border p-2 rounded w-full ${
                errors[index]?.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter option"
            />
            {errors[index]?.name && (
              <span className="text-red-500 text-sm">
                Option can't be empty
              </span>
            )}
          </div>

          <div className="">
            <label className="block text-gray-700">Values *</label>
            <div className="flex flex-wrap items-center space-x-2 border p-2 rounded w-full">
              {variant.values.map((value: string, valueIndex: number) => (
                <span
                  key={valueIndex}
                  aria-required
                  className="bg-gray-200 text-gray-800 text-[14px] font-[500] rounded-[6px] px-3 py-1 flex items-center space-x-2"
                >
                  {value}
                  <button
                    type="button"
                    onClick={() => removeValue(index, value)}
                    className="ml-2 text-balck"
                  >
                    ✕
                  </button>
                </span>
              ))}

              {/* Input for adding new values */}
              <input
                type="text"
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addValue(index);
                  }
                }}
                className="border-none focus:outline-none flex-grow"
                placeholder="Add new value"
              />
            </div>
            {errors[index]?.values && (
              <span className="text-red-500 text-sm">
                Values can't be empty
              </span>
            )}
          </div>
          <button
            onClick={() => removeVariant(index)}
            className="text-red-500  hover:text-red-700"
          >
            🗑️ 
          </button>
        </div>
      ))}
      <button
        onClick={addVariant}
        className="text-blue-500 hover:underline font-medium mt-4"
      >
        + Add Option
      </button>
    </div>
  );
};

export default Form2;
