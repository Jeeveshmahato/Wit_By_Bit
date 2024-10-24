import React, { useState } from "react";
import Form1 from "./Form1.tsx";
import Form2 from "./Form2.tsx";
import Form3 from "./Form3.tsx";
import Form4 from "./Form4.tsx";
// import { NavLink } from "react-router-dom";

const Pro: React.FC = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [currentStep, setCurrentStep] = useState(1); // To track the form stage
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    brand: "",
    image: "",
    variants: [{ name: "", values: [] }],
    combinations: [
      { name: "Variant 1", sku: "SKU001", inStock: true, quantity: 10 },
      { name: "Variant 2", sku: "SKU002", inStock: false, quantity: 5 },
    ],
    priceInr: 0,
    discount: {
      method: "",
      value: 0,
    },
  });

  // Handle form navigation
  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // Handle form data update
  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <>
      <div className="flex flex-col  overflow-hidden relative w-full md:flex-row gap-6 p-4">
        {/* Sidebar */}

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[24px] font-[600]">Products</h2>
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 bg-[#E1E7EB] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
                onClick={handleAddCategory}
              >
                Add Category
              </button>

              <button
                className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700"
                onClick={openModal}
              >
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
                        className="w-fit h-fit object-cover rounded"
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
        {isModal && (
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
        {isModalOpen && (
          <div className=" absolute top-0  h-[100vh] max-w-[99%] w-full overflow-hidden   bg-white">
            <div className="  bg-white  w-full   flex  z-50">
              <div className="bg-white p-6 rounded-lg  max-w-[99%] w-full">
                <div className="flex justify-between w-full items-center mb-6">
                  <h2 className="text-[24px] font-[600]">Add Product</h2>
                  <div className="flex space-x-4">
                    <button
                      className="px-4 py-2 bg-gray-200 text-[16px] font-[600] rounded text-gray-600 hover:bg-gray-300"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <div>
                      {currentStep > 0 && currentStep < 4 && (
                        <button
                          onClick={nextStep}
                          className="px-4 py-2 text-[16px] font-[600] bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Next
                        </button>
                      )}
                      {currentStep === 4 && (
                        <button
                        onClick={() => console.log(formData)}
                          className="px-4 py-2 text-[16px] font-[600] bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Confirm
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Stepper */}
                <div className="flexa hidden justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    Step {currentStep} of 4
                  </h2>
                </div>

                {/* Form based on the current step */}
                {currentStep === 1 && (
                  <Form1 formData={formData} updateFormData={updateFormData} />
                )}
                {currentStep === 2 && (
                  <Form2 formData={formData} updateFormData={updateFormData} />
                )}
                {currentStep === 3 && (
                  <Form3 formData={formData} updateFormData={updateFormData} />
                )}
                {currentStep === 4 && (
                  <Form4 formData={formData} updateFormData={updateFormData} />
                )}

                {/* Navigation Buttons */}
                <div className="mt-6  hidden justify-between">
                  {currentStep > 1 && (
                    <button
                      className="px-4 py-2 bg-gray-300 rounded-md"
                      onClick={prevStep}
                    >
                      Previous
                    </button>
                  )}
                  {currentStep < 4 ? (
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 bg-green-500 text-white rounded-md"
                      onClick={() => console.log(formData)} // You can handle form submission here
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Pro;
