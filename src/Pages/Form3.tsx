import React, { useState, useEffect } from "react";

interface Combination {
  name: string;
  sku: string;
  inStock: boolean;
  quantity: number | null;
}

interface Form3Props {
  formData: {
    combinations: Combination[];
  };
  updateFormData: (data: any) => void;
}

const Form3: React.FC<Form3Props> = ({ formData, updateFormData }) => {
  const [duplicateSkus, setDuplicateSkus] = useState<{ [index: number]: boolean }>({});

  // Function to detect duplicate SKUs
  const checkForDuplicateSkus = () => {
    const skuCount: { [sku: string]: number } = {};
    const duplicates: { [index: number]: boolean } = {};

    // Count occurrences of each SKU
    formData.combinations.forEach((combination, index) => {
      const sku = combination.sku.trim().toUpperCase(); // Normalize SKUs (case-insensitive)
      if (sku) {
        if (skuCount[sku]) {
          skuCount[sku] += 1;
        } else {
          skuCount[sku] = 1;
        }
      }
    });

    // Mark duplicates
    formData.combinations.forEach((combination, index) => {
      const sku = combination.sku.trim().toUpperCase();
      duplicates[index] = skuCount[sku] > 1; // Mark as duplicate if SKU appears more than once
    });

    setDuplicateSkus(duplicates);
  };

  useEffect(() => {
    checkForDuplicateSkus(); // Check for duplicate SKUs whenever combinations change
  }, [formData.combinations]);

  const handleSkuChange = (index: number, sku: string) => {
    const updatedCombinations = [...formData.combinations];
    updatedCombinations[index].sku = sku;
    updateFormData({ combinations: updatedCombinations });
  };

  const handleInStockChange = (index: number) => {
    const updatedCombinations = [...formData.combinations];
    updatedCombinations[index].inStock = !updatedCombinations[index].inStock;
    updateFormData({ combinations: updatedCombinations });
  };

  const handleQuantityChange = (index: number, quantity: number) => {
    const updatedCombinations = [...formData.combinations];
    updatedCombinations[index].quantity = quantity;
    updateFormData({ combinations: updatedCombinations });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Combinations</h3>
      {formData.combinations.map((combination: Combination, index: number) => (
        <div key={index} className="flex items-center  mb-4">
          <div className="flex-1">
            <p className="text-gray-700">{combination.name}</p>
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">SKU *</label>
            <input
              type="text"
              value={combination.sku}
              onChange={(e) => handleSkuChange(index, e.target.value)}
              className={`mt-1 block w-full px-3 py-2 border ${
                duplicateSkus[index] ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter SKU"
            />
            {duplicateSkus[index] && (
              <p className="text-red-500 text-sm">Duplicate SKU</p>
            )}
          </div>
          <div className="flex items-center justify-center flex-1">
            <label className="mr-2">In stock</label>
            <input
              type="checkbox"
              checked={combination.inStock}
              onChange={() => handleInStockChange(index)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              value={combination.quantity ?? ""}
              onChange={(e) =>
                handleQuantityChange(index, parseInt(e.target.value, 10) || 0)
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Quantity"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Form3;
