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
      <div className="pt-20 pb-5">
        <h6 className="text-xl mb-14">Add Product</h6>
        <form
          onSubmit={handleSubmit}
          className="bg-white border-1 border-divider rounded-12 p-5 max-w-800 mx-auto cursor-pointer overflow-hidden"
        >
          <div className="my-2">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Product Name"
              name="title"
              value={product.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <textarea
              className="w-full border-2 border-gray-300 p-2 rounded"
              rows="4"
              placeholder="Product Description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="mt-4">
            <select
              className="w-full border-2 border-gray-300 p-2 rounded"
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
            </select>
          </div>
          <div>
            <div className="mt-4">
              <input
                className="w-full border-2 border-gray-300 p-2 rounded"
                type="text"
                placeholder="Product Tags"
                name="tags"
                value={product.tags}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Brand"
              name="brand"
              value={product.brand}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="rating"
              name="rating"
              value={product.rating}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="stock"
              name="stock"
              value={product.stock}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
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
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
            />
            <input
              className="w-full border-2 border-gray-300 p-2 rounded"
              type="text"
              placeholder="Discount"
              name="discountPercentage"
              value={product.discountPercentage}
              onChange={handleInputChange}
            />
          </div>

          <label htmlFor="fileInput">
            <div className="h-[200px] mb-3 cursor-pointer border-2 border-gray-300 p-2 rounded mt-4">
              <div className="text-center flex items-center justify-center">
                <div className="flex justify-center items-center ">
                  <BiImageAdd className="text-5xl text-blue-600" />
                </div>
                <p>Drop your image here or browse</p>
                <p className="text-xs">JPG, PNG, and GIF images are allowed</p>
              </div>
            </div>
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            multiple // Allow selecting multiple files
          />
          <div className="flex justify-center items-center mt-30">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-20"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Main;
