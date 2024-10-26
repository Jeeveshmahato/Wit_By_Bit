// import React, { useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import Form1 from "./Form1.tsx";
// import Form2 from "./Form2.tsx";
// import Form3 from "./Form3.tsx";
// import Form4 from "./Form4.tsx";
// import ProductImage from "../assets/Shoes1.png";

// type FormValues = {
//   products: {
//     name: string;
//     category: string;
//     brand: string;
//     image: string;
//     variants: { name: string; values: string[] }[];
//     combinations: {
//       [key: string]: {
//         name: string;
//         sku: string;
//         quantity: number | null;
//         inStock: boolean;
//       };
//     };
//     priceInr: number;
//     discount: { method: string; value: number };
//   };
//   categories: { id: string; name: string }[];
// };

// const Pro: React.FC = () => {
//   const [isModal, setIsModal] = useState<boolean>(false); // Modal state for category
//   const [isProduct, setIsProduct] = useState<boolean>(false); // Modal state for product
//   const [categoryName, setCategoryName] = useState<string>(""); // Input state for category name
//   const [currentStep, setCurrentStep] = useState(1);

//   // Function to open "Add Category" modal
//   const handleAddCategory = () => {
//     setIsModal(true);
//   };

//   // Function to open "Add Product" modal
//   const handleAddProduct = () => {
//     setCurrentStep(1);
//     setIsProduct(!isProduct);
//   };

//   const handleCloseModal = () => {
//     setIsModal(false);
//   };

//   const handleSaveCategory = () => {
//     console.log("Category saved:", categoryName);
//     setIsModal(false);
//   };

//   const {
//     handleSubmit,
//     register,
//     control,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       products: {
//         name: "",
//         category: "",
//         brand: "",
//         image: "",
//         variants: [
//           { name: "Size", values: ["M", "L"] },
//           { name: "Color", values: ["Black", "Red"] },
//         ],
//         combinations: {
//           a: { name: "M/Black", sku: "ABC12", quantity: 4, inStock: false },
//           b: { name: "L/Red", sku: "ABC12", quantity: null, inStock: true },
//         },
//         priceInr: 500,
//         discount: { method: "pct", value: 12 },
//       },
//       categories: [
//         { id: "abc", name: "Shoes" },
//         { id: "xyz", name: "T-shirt" },
//       ],
//     },
//   });

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

//   const onSubmit: SubmitHandler<FormValues> = (data) => {
//     console.log("Final Form Data:", JSON.stringify(data, null, 2));
//     setIsProduct(false); // Close the product modal after submission
//   };
//   const products = [
//     {
//       category: "Shoes",
//       items: [
//         {
//           name: "Nike Air Jordan",
//           price: "₹12,000",
//           brand: "Nike",
//           image: `${ProductImage}`, // Replace with actual image URL
//         },
//         {
//           name: "Nike Dunk Low",
//           price: "₹8,000",
//           brand: "Nike",
//           image: `${ProductImage}`, // Replace with actual image URL
//         },
//       ],
//     },
//     {
//       category: "T-shirt",
//       items: [],
//     },
//   ];

//   return (
//     <>
//       <div className="flex flex-col md:flex-row gap-6 p-4">
//         {}

//         {/* Modal for Adding Category */}
//         {isModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//               <h2 className="text-xl font-bold mb-4">Add category</h2>
//               <div>
//                 <label className="block text-gray-700 mb-2">
//                   Category name *
//                 </label>
//                 <input
//                   type="text"
//                   className="border border-gray-300 p-2 rounded w-full"
//                   value={categoryName}
//                   onChange={(e) => setCategoryName(e.target.value)}
//                   placeholder="Enter category name"
//                 />
//               </div>
//               <div className="flex justify-end space-x-4 mt-4">
//                 <button
//                   className="px-4 py-2 bg-[#E1E7EB] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
//                   onClick={handleCloseModal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700"
//                   onClick={handleSaveCategory}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/*  Adding Product */}
//         {isProduct ? (
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="bg-white rounded-lg   w-full"
//           >
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-[24px] font-[600]">Add Product</h2>
//               <div className="flex space-x-4">
//                 {currentStep === 1 && (
//                   <button
//                     onClick={handleAddProduct}
//                     type="button"
//                     className="px-4 py-2 bg-[#E1E7EB] w-[160px] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
//                   >
//                     Cancel
//                   </button>
//                 )}
//                 {currentStep > 1 && currentStep <= 4 && (
//                   <button
//                     type="button"
//                     onClick={prevStep}
//                     className="px-4 py-2 bg-[#E1E7EB] w-[160px] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
//                   >
//                     Back
//                   </button>
//                 )}
//                 {currentStep > 0 && currentStep < 4 && (
//                   <button
//                     type="button"
//                     onClick={nextStep}
//                     className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700 w-[160px]"
//                   >
//                     Next
//                   </button>
//                 )}

//                 {currentStep === 4 && (
//                   <button
//                     type="submit"
//                     className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700 w-[160px]"
//                   >
//                     Submit
//                   </button>
//                 )}
//               </div>
//             </div>
//             {/* Display form steps based on `currentStep` */}
//             {currentStep === 1 && <Form1 register={register} errors={errors} />}
//             {currentStep === 2 && <Form2 register={register} errors={errors} control={control} />}
//             {currentStep === 3 && <Form3 register={register} errors={errors} />}
//             {currentStep === 4 && <Form4 register={register} errors={errors} />}
//             <div className=" hidden justify-between mt-4">
//               {currentStep > 1 && (
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-4 py-2 bg-gray-300 rounded-md"
//                 >
//                   Previous
//                 </button>
//               )}
//               {currentStep < 4 ? (
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md"
//                 >
//                   Next
//                 </button>
//               ) : (
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-green-500 text-white rounded-md"
//                 >
//                   Submit
//                 </button>
//               )}
//             </div>
//           </form>
//         ) : (
//           <div className="flex-1 h-full">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-[24px] font-[600]">Products</h2>
//               <div className="flex space-x-4">
//                 <button
//                   className="px-4 py-2  bg-[#E1E7EB] text-[16px] font-[600] rounded text-[#1F8CD0] hover:bg-gray-300"
//                   onClick={handleAddCategory}
//                 >
//                   Add Category
//                 </button>
//                 <button
//                   className="px-4 py-2 text-[16px] font-[600] bg-[#1F8CD0] text-white rounded hover:bg-blue-700"
//                   onClick={handleAddProduct}
//                 >
//                   Add Product
//                 </button>
//               </div>
//             </div>

//             {/* Product Categories */}
//             <div className="flex lg:flex-row flex-col w-full xl:w-[80%]  2xl:w-[70%] h-[100vh] gap-6">
//               {products.map((productCategory, idx) => (
//                 <div
//                   key={idx}
//                   className="flex-1 bg-gray-50 p-4 rounded shadow-sm border border-gray-200"
//                 >
//                   <h3 className="font-semibold text-lg mb-4">
//                     {productCategory.category}
//                   </h3>
//                   {productCategory.items.length > 0 ? (
//                     productCategory.items.map((product, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center p-4 border bg-white border-gray-200 rounded mb-4 hover:shadow-lg transition-shadow"
//                       >
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-16 h-16 object-cover rounded"
//                         />
//                         <div className="ml-4">
//                           <h4 className="font-semibold">{product.name}</h4>
//                           <p className="text-gray-500">{product.price}</p>
//                           <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
//                             {product.brand}
//                           </span>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-400">No products available</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Pro;
