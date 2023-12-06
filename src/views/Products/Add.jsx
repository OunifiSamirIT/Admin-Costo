import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Actions/productActions";

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
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const imagesArray = [];

    for (let i = 0; i < files.length; i++) {
      imagesArray.push({ file: files[i] });
    }

    setProduct({ ...product, images: imagesArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(product).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((image, index) => {
          formData.append(`files`, image.file);
        });
      } else {
        formData.append(key, value);
      }
    });

    dispatch(addProduct(formData));
  };

  return (
    <>
      <div className="pt-6 pb-5">
        <h6 className="text-xl mb-6">Add wassim Product</h6>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 border-2  border-slate-200 rounded-md shadow-md p-5 max-w-800 mx-auto cursor-pointer overflow-hidden dark:bg-gray-600"
        >
          <div className="flex justify-end items-center mt-30">
            <button
              type="submit"
              className="bg-blue-500 text-white dark:text-black rounded-md py-2 px-4 rounded-20"
            >
              Add New Product
            </button>
          </div>
          <div className="my-2">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Product Nam
            </label>{" "}
            <input
              className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Product Name"
              name="title"
              value={product.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <textarea
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              rows="4"
              placeholder="Product Description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              category
            </label>{" "}
            <select
              className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Category
              </option>
              {categories?.map(({ category_id, name }) => (
                <option value={name} key={category_id}>
                  {name}
                </option>
              ))}
            </select>{" "}
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Tags
            </label>
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Product Tags"
              name="tags"
              value={product.tags}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4 flex items-center gap-4">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Brand
            </label>{" "}
            <input
              className="w-full border-2 -ml-1 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Brand"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
            />
            <label
              for="cover-photo"
              class="block text-sm mr-4 font-medium leading-6 text-gray-900"
            >
              Rating
            </label>
            <input
              className="w-full border-2 -ml-1 border-gray-300 p-2 rounded"
              type="text"
              placeholder="rating"
              name="rating"
              value={product.rating}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4 flex items-center gap-4">
            {" "}
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Stock
            </label>
            <input
              className="w-full border-2 mr-1 -ml-1 border-gray-300 p-2 rounded"
              type="text"
              placeholder="stock"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
            />
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Thumbn
            </label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="thumbnail"
              name="thumbnail"
              value={product.thumbnail}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4 flex items-center gap-4">
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="TND"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />{" "}
            <label
              for="cover-photo"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Discount
            </label>
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="%"
              name="discountPercentage"
              value={product.discountPercentage}
              onChange={handleInputChange}
            />
          </div>

          <label htmlFor="fileInput">
            <div class="col-span-full">
              <label
                for="cover-photo"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Products photo
              </label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            multiple 
          />
        </form>
      </div>
    </>
  );
}

export default Main;
