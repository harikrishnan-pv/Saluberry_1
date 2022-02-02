import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alert from "../../components/alert/Alert";
import { fileInputTypes, isValidFiles } from "../../utils/helpers";
import { useParams, useHistory } from "react-router-dom";
import api from "./../../utils/api";
import { addAllProducts, editProduct } from "../../redux/products/productsSlice";

const EditProduct = ({ url }) => {
  const { productId } = useParams();
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const fetchData = async () => {
    // These three lines are commented by ady.
    // if (allProducts.length !== 0) {
    //   return setProductsArr(allProducts);
    // }
    const { data } = await api.get("/products");
    dispatch(addAllProducts(data));
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { allProducts } = useSelector((state) => {
    return state.products;
  });
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  const [editableProduct, setEditableProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category: "",
    subCategory: "",
    images: "",
  });

  const [updatingData, setUpdatingData] = useState(false);

  useEffect(() => {
    const reqProduct = allProducts.find((p) => {
      return p._id === productId;
    });
    setEditableProduct(reqProduct);
    if (reqProduct) setFormData(mapToViewModel(reqProduct));
  }, [allProducts, productId]);

  const mapToViewModel = (product) => {
    return {
      name: product.name,
      price: product.amount,
      description: product.description,
      stock: product.stock,
      category: product.category._id,
      subCategory: product.subCategory._id,
      images: "",
    };
  };

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files.length <= 6) {
      if (isValidFiles(files)) {
        // setImage(URL.createObjectURL(file));
        setFormData((prev) => ({
          ...prev,
          images: files,
        }));
      } else {
        alert(`Wrong Files Type`, "danger");
        e.target.value = "";
        setFormData((prev) => ({
          ...prev,
          images: "",
        }));
      }
    } else if (files.length === 0) {
      alert("Select atleast One Image", "danger");
    } else {
      alert("You can not select more than 6 images", "danger");
      e.target.value = "";
      setFormData((prev) => ({
        ...prev,
        images: "",
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    let updateUrl;
    if (editableProduct) updateUrl = `/products/${editableProduct._id}`
    e.preventDefault();
    try {
      if (
        formData.name &&
        formData.price &&
        formData.description &&
        formData.stock
      ) {
        setUpdatingData(true);
        const data = new FormData();
        data.append("name", formData.name);
        data.append("amount", formData.price);
        data.append("description", formData.description);
        data.append("stock", formData.stock);
        data.append("categoryId", formData.category);
        data.append("subCategoryId", formData.subCategory);
        // data.append("images", Object.values(formData.images));
        if (formData.images) {
          for (let i = 0; i < formData.images.length; i++)
          data.append("images", formData.images[i])
        }
        
        const res = await api.put(updateUrl, data, {
          headers: { "x-auth-token": currentUser.token },
        });
        dispatch(editProduct(res.data));
        setUpdatingData(false);
        alert("Product Updated Succesfully", "success");
        history.push(`${url}/products`);
      } else {
        alert("Every Input field is Required.", "danger");
      }
    } catch (err) {
      alert(err.response.data || "Some Error Occured", "danger");
      setUpdatingData(false);
    }
  };

  return (
    <>
      <div className="">
        <div className="container text-center mx-auto">
          <div className="">
            <h1 className="text-5xl p-10 mt-10 font-bold text-pink-800">Customize-Product</h1>
            <form onSubmit={onSubmitHandler} className="w-96 text-left  mx-auto">
              <div className="addProductItem">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">Image</label>
                <input
                  type="file"
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  id="file"
                  multiple
                  accept={fileInputTypes}
                  onChange={onImageChange}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  placeholder="Product Title"
                  name="name"
                  required
                  maxLength={18}
                  value={formData.name}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="addProductItem">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">Price</label>
                <input
                  type="text"
                  name="price"
                  required
                  value={formData.price}
                  onChange={onChangeHandler}
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  placeholder="Enter Price"
                />
              </div>

              <div className="addProductItem">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">
                  Available Stock
                </label>
                <input
                  type="text"
                  required
                  name="stock"
                  value={formData.stock}
                  onChange={onChangeHandler}
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  placeholder="Enter Number of Stock"
                />
              </div>

              <div className="col-sm-12 addProductItem">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">Description</label>

                <textarea
                  placeholder="Type your Product Description here..."
                  name="description"
                  required
                  value={formData.description}
                  onChange={onChangeHandler}
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  rows="4"
                ></textarea>
              </div>
              <div className="addProductItem ">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">Category</label>
                <select
                  name="category"
                  id="active"
                  onChange={(e) => {
                    onChangeHandler(e);
                    setFormData((prev) => ({
                      ...prev,
                      subCategory: categories.find(
                        (cat) => cat._id === e.target.value
                      ).subCategories[0]._id,
                    }));
                  }}
                  value={formData.category}
                >
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addProductItem ">
                <label className="form-label text-xl inline-block mb-2 text-gray-700">Sub-Category</label>
                <select
                  name="subCategory"
                  id="active"
                  value={formData.subCategory}
                  onChange={onChangeHandler}
                >
                  {formData.category &&
                    categories
                      .find((cat) => cat._id === formData.category)
                      .subCategories.map((sub) => (
                        <option key={sub._id} value={sub._id}>
                          {sub.name}
                        </option>
                      ))}
                </select>
              </div>
              <button
                disabled={updatingData}
                className="inline-block px-6 m-5 mx-auto w-full py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out "
              >
                {updatingData ? (
                  <img src="https://img.icons8.com/ios-filled/50/000000/loading-circle--v2.png" />
                ) : (
                  "Update Product"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
