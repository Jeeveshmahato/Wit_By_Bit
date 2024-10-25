import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductList: React.FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false); // Modal state
  const [categoryName, setCategoryName] = useState<string>(""); // Input state for category name

  const products = [
    {
      category: "Shoes",
      items: [
        {
          name: "Nike Air Jordan",
          price: "₹12,000",
          brand: "Nike",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
        {
          name: "Nike Dunk Low",
          price: "₹8,000",
          brand: "Nike",
          image: "https://via.placeholder.com/100", // Replace with actual image URL
        },
      ],
    },
    {
      category: "T-shirt",
      items: [],
    },
  ];

  const handleAddCategory = () => {
    setIsModal(true); // Show the modal when Add Category is clicked
  };

  const handleCloseModal = () => {
    setIsModal(false); // Close the modal
  };

  const handleSaveCategory = () => {
    // Add functionality to save the new category here
    console.log("Category saved:", categoryName);
    setIsModal(false); // Close the modal after saving
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-[600]">Products</h2>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-[#E1E7EB] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
              onClick={handleAddCategory}
            >
              Add Category
            </button>
            
              <button  className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700">
                Add Product
              </button>
          </div>
        </div>

        {/* Product Categories */}
        <div className="flex w-full lg:w-[60%] h-[100vh] space-x-6">
          {products.map((productCategory, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gray-50 p-4 rounded shadow-sm border border-gray-200"
            >
              <h3 className="font-semibold text-lg mb-4">
                {productCategory.category}
              </h3>
              {productCategory.items.length > 0 ? (
                productCategory.items.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border bg-white border-gray-200 rounded mb-4 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-gray-500">{product.price}</p>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                        {product.brand}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No products available</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Adding Category */}
      {isModal && 
      (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Add category</h2>
            <div>
              <label className="block text-gray-700 mb-2">
                Category name *
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded w-full"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                placeholder="Enter category name"
              />
            </div>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="px-4 py-2 bg-[#E1E7EB] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700"
                onClick={handleSaveCategory}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
