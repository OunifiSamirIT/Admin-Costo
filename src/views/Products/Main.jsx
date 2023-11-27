import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";

const categories = [
  {
    category_id: 1,
    name: "Homme",
  },
  {
    category_id: 2,
    name: "Femme",
  },
  {
    category_id: 3,
    name: "BOY",
  },
];
function Main() {
  const [image, setImage] = useState("");

  return (
    <>
      <div className="pt-20 pb-5">
        <h6 className="text-xl mb-14">Add Product</h6>
        <div className="bg-white border-1 border-divider rounded-12 p-5 max-w-800 mx-auto cursor-pointer overflow-hidden">
          <div className="my-2">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full border-2 border-gray-300 p-2 rounded"
              rows="4"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="mt-4">
            <select
              className="w-full border-2 border-gray-300 p-2 rounded"
              id="category"
            >
              <option value="" disabled selected>
                Category
              </option>
              {categories?.map(({ category_id, name }) => (
                <option value={name} key={category_id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <div className="mt-4">
              <input
                className="w-full border-2 border-gray-300 p-2 rounded"
                type="text"
                placeholder="Product Tags"
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Brand"
            />
          </div>
          <div className="mt-4 flex items-center gap-4">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Price"
              defaultValue="$234.24"
            />
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Discount"
              defaultValue="20%"
            />
          </div>
          <input type="file" className="hidden" />
          <div className="h-[200px] mb-3 cursor-pointer border-2 border-gray-300 p-2 rounded mt-4">
            <div className="text-center flex items-center justify-center">
              <div className="flex justify-center items-center ">
                {" "}
                <BiImageAdd className="text-5xl text-blue-600" />
              </div>
              <p>Drop your image here or browse</p>
              <p className="text-xs">JPG, PNG, and GIF images are allowed</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-30">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-20">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
