import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Actions/productActions";
import { ClassicEditor, TomSelect } from "@/base-components";

const categoriesprod = [
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
const Taille = [
  {
    Taille_id: 1,
    name: "S",
  },
  {
    Taille_id: 2,
    name: "M",
  },
  {
    Taille_id: 3,
    name: "L",
  },
  {
    Taille_id: 4,
    name: "XL",
  },
  {
    Taille_id: 5,
    name: "XXL",
  },
  {
    Taille_id: 6,
    name: "30",
  },
  {
    Taille_id: 7,
    name: "32",
  },
  {
    Taille_id: 8,
    name: "34",
  },
  {
    Taille_id: 9,
    name: "36",
  },
  {
    Taille_id: 10,
    name: "38",
  },
  {
    Taille_id: 11,
    name: "40",
  },
  {
    Taille_id: 12,
    name: "42",
  },
  {
    Taille_id: 13,
    name: "44",
  },
  {
    Taille_id: 14,
    name: "46",
  },
  {
    Taille_id: 15,
    name: "48",
  },
];
const COLOR = [
  {
    COLOR_id: 1,
    name: "Rouge",
  },
  {
    COLOR_id: 2,
    name: "Bleu",
  },
  {
    COLOR_id: 3,
    name: "Noir",
  },
  {
    COLOR_id: 4,
    name: "Blanc",
  },
  {
    COLOR_id: 5,
    name: "Beige",
  },
  {
    COLOR_id: 6,
    name: "Vert",
  },
  {
    COLOR_id: 7,
    name: "Noir",
  },
  {
    COLOR_id: 8,
    name: "Gris",
  },
  {
    COLOR_id: 9,
    name: "Marron",
  },
  {
    COLOR_id: 10,
    name: "Jaune",
  },
  {
    COLOR_id: 11,
    name: "Rose",
  },
  {
    COLOR_id: 12,
    name: "Violet",
  },
];
function Main() {
  const [categories, setCategories] = useState([1, 3]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    Taille: "",
    category: "",
    Color: "",
    Tag: "",

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

    // Update the state with the mapped images
    const newUploadedImages = imagesArray.map((image, index) => (
      <img key={index} src={URL.createObjectURL(image.file)} alt={`Image ${index + 1}`} className="mx-auto h-12 w-12" />
    ));

    setUploadedImages(newUploadedImages);
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

    // Dispatch your action (addProduct) with formData
    dispatch(addProduct(formData));
    // After successful submission, update the UI with selected images
    const uploadedImages = product.images.map((image, index) => (
      <img key={index} src={URL.createObjectURL(image.file)} alt={`Image ${index + 1}`} className="mx-auto h-12 w-12" />
    ));
    setUploadedImages(uploadedImages);

    // You can do something with the uploadedImages, such as displaying them in a separate div or modal
    console.log("Uploaded Images:", uploadedImages);

    // Reset the form or navigate to another page if needed
    setProduct({ images: [] });
    setUploadedImages([]);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   Object.entries(product).forEach(([key, value]) => {
  //     if (key === "images") {
  //       value.forEach((image, index) => {
  //         formData.append(`files`, image.file);
  //       });
  //     } else {
  //       formData.append(key, value);
  //     }
  //   });

  //   dispatch(addProduct(formData));

  // };

  return (
    <>
      
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">New Product</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 border-2  border-slate-200 rounded-md shadow-md p-5 max-w-800 mx-auto cursor-pointer overflow-hidden dark:bg-gray-600"
      >
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Form Layout */}
          <div className="intro-y box p-5">
            <div>
              <label htmlFor="crud-form-1" className="form-label">
                Product Name
              </label>
              <input
                id="crud-form-1"
                type="text"
                className="form-control w-full"
                placeholder="name product"
                name="title"
                value={product.title}
                onChange={handleInputChange}
              />
            </div>

            <div className="mt-3">
              <label className="form-label">Category</label>
              <div className="sm:grid grid-cols-3 gap-2">
                <div className="input-group">
                  <div id="input-group-3" className="input-group-text">
                    CAT
                  </div>
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="category"
                    name="category"
                    value={product.category}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Category
                    </option>
                    {categoriesprod?.map(({ category_id, name }) => (
                      <option value={name} key={category_id}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="color" className="input-group-text">
                    Color
                  </div>
                  <input
                  id="crud-form-3"
                  type="text"
                  className="form-control"
                  placeholder="Color"
                  value={product.Color}
                  name="Color"
                  onChange={handleInputChange}
                  aria-describedby="input-group-1"
                />
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="taille" className="input-group-text">
                    Taille
                  </div>
                  <input
                  id="crud-form-3"
                  type="text"
                  className="form-control"
                  placeholder="Tag"
                  value={product.Taille}
                  name="Taille"
                  onChange={handleInputChange}
                  aria-describedby="input-group-1"
                />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="crud-form-3" className="form-label">
              Tag
              </label>
              <div className="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  className="form-control"
                  placeholder="Tag"
                  value={product.tag}
                  name="Tag"
                  onChange={handleInputChange}
                  aria-describedby="input-group-1"
                />
                <div id="input-group-1" className="input-group-text">
                  pcs
                </div>
              </div>
            </div>
            {/* <div className="mt-3">
              <label htmlFor="crud-form-2" className="form-label">
                Tag
              </label>
              <input
                id="crud-form-2"
                type="text"

                value={product.tag}
                name="tag"
                onChange={handleInputChange}
                className="w-full"
              />
               
            </div> */}
            <div className="mt-3">
              <label htmlFor="crud-form-3" className="form-label">
                Quantity
              </label>
              <div className="input-group">
                <input
                  id="crud-form-3"
                  type="text"
                  className="form-control"
                  name="stock"
                  placeholder="Quantity"
                  value={product.stock}
                  onChange={handleInputChange}
                  aria-describedby="input-group-1"
                />
                <div id="input-group-1" className="input-group-text">
                  pcs
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="crud-form-4" className="form-label">
                Rating
              </label>
              <div className="input-group">
                <input
                  id="crud-form-4"
                  type="text"
                  className="form-control"
                  name="rating"

                  placeholder="Rating"
                  value={product.rating}
                  onChange={handleInputChange}
                  aria-describedby="input-group-2"
                />
                <div id="input-group-2" className="input-group-text">
                  Rating
                </div>
              </div>
            </div>
            <div className="mt-3">
              <label className="form-label">Price</label>
              <div className="sm:grid grid-cols-3 gap-2">
                <div className="input-group">
                  <div id="input-group-3" className="input-group-text">
                    TND
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="TND"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    aria-describedby="input-group-3"
                  />
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="input-group-4" className="input-group-text">
                    Solde
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="discount Percentage"
                    name="discountPercentage"
                    value={product.discountPercentage}
                    onChange={handleInputChange}
                    aria-describedby="input-group-4"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label>Description</label>
              <div className="mt-2  ">
                <input
                className="form-control w-full"
                  // value={editorData}
                  // onChange={setEditorData}
                  // config={editorConfig}
                  type="text"
                  placeholder="Product Description"
                  name="description"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </div>
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
            {/* <input
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleImageChange}
              multiple
            /> */}

<input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleImageChange}
        multiple
      />
      {/* Display selected images */}
      <div>
        {uploadedImages}
      </div>
            <div className="text-right mt-5">
              <button
                type="button"
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary w-24">
                Save
              </button>
            </div>
          </div>
          {/* END: Form Layout */}
        </div>
      </form>
    </>
  );
}

export default Main;
