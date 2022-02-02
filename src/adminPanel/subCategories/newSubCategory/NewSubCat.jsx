// import React from 'react'
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import alert from "../../../components/alert/Alert";
import { fileInputTypes, isValidFile } from "../../../utils/helpers";
import "./newSubCat.css";
import api from "./../../../utils/api";
import { addSubCategory } from "../../../redux/subCategory/subCategorySlice";

const NewSubCat = ({ url }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState(categories[0]._id);

  const formRef = useRef();

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files.length === 1) {
      const file = files[0];
      if (isValidFile(file)) {
        setImage(file);
      } else {
        alert(`Wrong File Type ${file.type}..`, "danger");
      }
    } else if (files.length === 0) {
      alert("Select One Image", "danger");
    } else {
      alert("You cannot select multiple images", "danger");
    }
  };

  const newSubcategoryHandler = async (e) => {
    e.preventDefault();
    if (!name || !parentCategory || !image)
      return alert("All Input fields are required.");
    try {
      setLoading(true);

      let formData = new FormData();
      formData.append("name", name);
      formData.append("categoryId", parentCategory);
      formData.append("image", image);

      // backend request
      // TODO:
      const res = await api.post("/subcategories", formData, {
        headers: {
          "x-auth-token": currentUser.token,
        },
      });
      dispatch(addSubCategory(res.data));
      setLoading(false);
      history.push(`${url}/subcategories`);
    } catch (err) {
      alert(err.response?.data || "Some error happened. Try Again", "danger");
      setLoading(false);
      console.log(err.response);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="row d-flex justify-content-center mt-3">
        <div className=" col-new">
          {/* <img src={image} alt="" /> */}
          <h1 className="text-golden mb-2 mt-3">New Sub-Category</h1>
          <form onSubmit={newSubcategoryHandler} ref={formRef}>
            <div className="addProductItem">
              <label className="form-label text-light">
                Background Image for SubCategory
              </label>
              <input
                type="file"
                className="form-control"
                id="file"
                accept={fileInputTypes}
                onChange={onImageChange}
              />
            </div>
            <div className="addProductItem">
              <label className="form-label text-light">SubCategory Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Enter New Category Title"
                maxLength={18}
              />
            </div>
            <div className="addProductItem ">
              <label className="form-label text-light">Parent Category</label>
              <select
                name="active"
                id="active"
                value={parentCategory}
                onChange={(e) => {
                  setParentCategory(e.target.value);
                }}
              >
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              disabled={loading}
              className="btn golden-button mt-3 mb-3 align-item-center w-100"
            >
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Create SubCategory"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSubCat;
