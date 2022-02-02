import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alert from "../../components/alert/Alert";
import { fileInputTypes, isValidFiles } from "../../utils/helpers";
import "./newProduct.css";
import api from "./../../utils/api";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../redux/products/productsSlice";

export default function NewProduct({ url }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector((state) => state.categories);
  const { currentUser } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    category: categories[0]._id,
    subCategory: categories[0].subCategories[0]._id,
    images: "",
  });

  const [postingData, setPostingData] = useState(false);

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
    e.preventDefault();
    try {
      if (
        formData.name &&
        formData.price &&
        formData.description &&
        formData.images &&
        formData.stock
      ) {
        setPostingData(true);
        const data = new FormData();
        data.append("name", formData.name);
        data.append("amount", formData.price);
        data.append("description", formData.description);
        data.append("stock", formData.stock);
        data.append("categoryId", formData.category);
        data.append("subCategoryId", formData.subCategory);
        // data.append("images", Object.values(formData.images));
        for (let i = 0; i < formData.images.length; i++) {
          data.append("images", formData.images[i]);
        }
        const res = await api.post("/products", data, {
          headers: { "x-auth-token": currentUser.token },
        });
        dispatch(addProduct(res.data));
        setPostingData(false);
        alert("Product Added Succesfully", "success");
        history.push(`${url}/products`);
      } else {
        alert("Every Input field is Required.", "danger");
      }
    } catch (err) {
      alert(err.response.data || "Some Error Occured", "danger");
      setPostingData(false);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-content-center mt-3">
        <div className=" col-new">
          <h1 className="mb-2 mt-3 text-light">New Product</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="addProductItem">
              <label className="form-label text-golden">Image</label>
              <input
                type="file"
                className="form-control"
                id="file"
                multiple
                accept={fileInputTypes}
                onChange={onImageChange}
              />
            </div>
            <div className="addProductItem">
              <label className="form-label text-golden">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Product Title"
                maxLength={18}
              />
            </div>
            <div className="addProductItem">
              <label className="form-label text-golden">Price ( In Rs )</label>
              <input
                type="text"
                name="price"
                required
                value={formData.price}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Enter Price"
              />
            </div>

            <div className="addProductItem">
              <label className="form-label text-golden">Available Stock</label>
              <input
                type="text"
                required
                name="stock"
                value={formData.stock}
                onChange={onChangeHandler}
                className="form-control"
                placeholder="Enter Number of Stock"
              />
            </div>

            <div className="col-sm-12 addProductItem">
              <label className="form-label text-golden">Description</label>

              <textarea
                placeholder="Type your Product Description here..."
                name="description"
                required
                value={formData.description}
                onChange={onChangeHandler}
                className="form-control"
                rows="4"
              ></textarea>
            </div>

            <div className="addProductItem ">
              <label className="form-label text-golden">Category</label>
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
              <label className="form-label text-golden">Sub-Category</label>
              <select
                name="subCategory"
                id="active"
                value={formData.subCategory}
                onChange={onChangeHandler}
              >
                {categories
                  .find((cat) => cat._id === formData.category)
                  .subCategories.map((sub) => (
                    <option key={sub._id} value={sub._id}>
                      {sub.name}
                    </option>
                  ))}
              </select>
            </div>
            <button
              disabled={postingData}
              className="btn golden-button mt-3 mb-3 align-item-center w-100 "
            >
              {postingData ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden text-golden">Loading...</span>
                </div>
              ) : (
                "Create Product"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
