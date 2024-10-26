// import React from "react";
// import { useForm, useFieldArray, Controller, FieldErrors } from "react-hook-form";
// import { RiArrowRightSLine } from "react-icons/ri";
// import { FaTrash } from "react-icons/fa";

// interface Form2Props {
//   register: UseFormRegister<any>;
//   errors: any;
// }

// const Form2: React.FC<Form2Props> = ({ register, errors }) => {
//   return (
//     <>
//       {/* Steps */}
//       <div className="flex items-center space-x-4 mb-8">
//         <span className=" text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
//           Description
//         </span>
//         <span className="text-gray-400">
//           <RiArrowRightSLine />
//         </span>
//         <span className="text-[#1F8CD0] text-[14px] font-[500] bg-[#DAEDF9] rounded-[8px] py-1 px-2">
//           Variants
//         </span>
//         <span className="text-gray-400">
//           <RiArrowRightSLine />
//         </span>
//         <span className="text-[14px] font-[500] text-[#808080]">
//           Combinations
//         </span>
//         <span className="text-gray-400">
//           <RiArrowRightSLine />
//         </span>
//         <span className="text-[14px] font-[500] text-[#808080]">
//           Price info
//         </span>
//       </div>
//       <div className="shadow-[0_0_20px_-2px_rgba(0,0,0,0.1)] p-[24px]">
//         <h3 className="text-xl font-bold mb-4">Variants</h3>
//         {fields.map((field, index) => (
//           <div key={field.id} className="flex items-center space-x-4 mb-4">
//             {/* Option Field */}
//             <div className="flex-1">
//               <label className="block text-gray-700">Option *</label>
//               <input
//                 type="text"
//                 {...register(`products.variants.${index}.name`, {
//                   required: "Option can’t be empty",
//                 })}
//                 className={`border p-2 rounded w-full ${
//                   errors?.products?.variants?.[index]?.name
//                     ? "border-red-500"
//                     : "border-gray-300"
//                 }`}
//                 placeholder="Enter option"
//               />
//               {errors?.products?.variants?.[index]?.name && (
//                 <p className="text-red-500 text-sm">
//                   {errors.products.variants[index].name?.message}
//                 </p>
//               )}
//             </div>

//             {/* Values Field */}
//             <div className="flex-1">
//               <label className="block text-gray-700">Values *</label>
//               <Controller
//                 control={control}
//                 name={`products.variants.${index}.values`}
//                 rules={{
//                   validate: (values) =>
//                     (values && values.length > 0) || "Values can’t be empty",
//                 }}
//                 render={({ field }) => (
//                   <input
//                     type="text"
//                     value={field.value.join(", ")}
//                     onChange={(e) =>
//                       field.onChange(
//                         e.target.value.split(",").map((val) => val.trim())
//                       )
//                     }
//                     className={`border p-2 rounded w-full ${
//                       errors?.products?.variants?.[index]?.values
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                     placeholder="Enter values separated by commas"
//                   />
//                 )}
//               />
//               {errors?.products?.variants?.[index]?.values && (
//                 <p className="text-red-500 text-sm">
//                   {errors.products.variants[index].values?.message}
//                 </p>
//               )}
//             </div>

//             {/* Remove Option Button */}
//             <button
//               type="button"
//               onClick={() => remove(index)}
//               className="text-red-500 hover:text-red-700"
//             >
//               <FaTrash />
//             </button>
//           </div>
//         ))}
//         {/* Add Option Button */}
//         <button
//           type="button"
//           onClick={() => append({ name: "", values: [] })}
//           className="text-blue-500 hover:underline font-medium mt-4"
//         >
//           + Add Option
//         </button>
        
//       </div>
//     </>
//   );
// };

// export default Form2;
