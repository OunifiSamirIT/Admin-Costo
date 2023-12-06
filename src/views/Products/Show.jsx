import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownHeader,
  DropdownFooter,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { fetchProductsAction } from "../../redux/Actions/fetchProductsAction";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showModel,setShowModel] = useState(false);
  const [imageUrl , setImageUrl] = useState('');
  const dispatch = useDispatch();

  const checkStock = (stock) => {
    if (stock > 10) {
      return 'GOOD';
    } else if (stock == 0) {
      return 'OVER';
    } else if (stock > 0 && stock <= 5) {
      return 'LOW';
    }
  }
  const showImageModel = () => {

  }
  const handleImageClick = (url) => {
    setImageUrl('http://localhost:5000/' + url)
    console.log(imageUrl)
    setShowModel(true)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const prod = await dispatch(fetchProductsAction())
        setProducts(prod.payload)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
    console.log('this is prod', products)
  }, [dispatch])
  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Products</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
        <Link to="/products/add">
          <button className="btn btn-primary shadow-md mr-2">
            Add New Product
          </button>
          </Link>
          <Dropdown>
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  Excel
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <div className="hidden md:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">IMAGES</th>
                <th className="whitespace-nowrap">PRODUCT NAME</th>
                <th className="text-center whitespace-nowrap">STOCK</th>
                <th className="text-center whitespace-nowrap">PRICE</th>
                <th className="text-center whitespace-nowrap">STATUS</th>
                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, prodKey) => (
                <tr key={prodKey} className="intro-x">
                  <td className="w-40">
                    <div className="flex">
                      {prod.images.map((img, imgKey) => (
                        <div key={imgKey} className="w-10 h-10 image-fit zoom-in">
                          <Tippy
                            onClick={() => handleImageClick(img.url)}
                            tag="img"
                            alt="Midone Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://localhost:5000/' + img.url}
                            content={`Uploaded at 03/12/2024`}
                          />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <a href="" className="font-medium whitespace-nowrap">
                      {prod.title}
                    </a>
                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                      {prod.category}
                    </div>
                  </td>
                  <td className="text-center">{prod.stock}</td>
                  <td className="text-center">{prod.price}</td>
                  <td className="w-40">

                    <div
                      className={classnames({
                        "flex items-center justify-center": true,
                        "text-success": checkStock(prod.stock) === 'GOOD',
                        "text-danger": checkStock(prod.stock) === 'OVER',
                        "text-orange-500": checkStock(prod.stock) === 'LOW',
                      })}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      <p>{checkStock(prod.stock)}</p>

                    </div>
                  </td>
                  <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
                      <Dropdown>
                        <DropdownToggle className="btn px-2 box">
                          <span className="w-5 h-5 flex items-center justify-center">
                            <Lucide icon="MoreVertical" className="w-4 h-4" />
                          </span>
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>
                              <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Edit
                            </DropdownItem>
                            <DropdownItem>
                              <Lucide icon="PauseCircle" className="w-4 h-4 mr-2" />Stop 
                            </DropdownItem>
                            <DropdownItem>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                            </DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <Lucide icon="ChevronsRight" className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 form-select box mt-3 sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>

        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={showModel}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <div className="text-slate-500 mt-2">
                <img src={imageUrl} alt='image'/>
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setShowModel(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
