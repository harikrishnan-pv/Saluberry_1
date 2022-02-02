import { useState } from "react";
import { useHistory } from "react-router-dom";
import alert from "../../components/alert/Alert";
import { fileInputTypes, isValidFile } from "../../utils/helpers";
import "./newCategory.css";
import api from "./../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../redux/categories/categorySlice";

export default function NewCategory({ url }) {
  const history = useHistory();
  const [postingData, setPostingData] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files.length === 1) {
      const file = files[0];
      if (isValidFile(file)) {
        // setImage(URL.createObjectURL(file));
        setImage(file);
      } else {
        alert(`Wrong File Type ${file.type}..`, "danger");
        e.target.value = "";
        setImage("");
      }
    } else if (files.length === 0) {
      alert("Select One Image", "danger");
    } else {
      alert("You cannot select multiple images", "danger");
      e.target.value = "";
      setImage("");
    }
  };

  const newCategoryHandler = async (e) => {
    e.preventDefault();
    try {
      if (name && image) {
        setPostingData(true);
        const data = new FormData();
        data.append("name", name);
        data.append("image", image);
        const res = await api.post("/categories", data, {
          headers: { "x-auth-token": currentUser.token },
        });
        console.log(addCategory(res.data))
        dispatch(addCategory(res.data));
        setPostingData(false);
        alert("Category Added Succesfully", "success");
        history.push(`${url}/categories`);
      } else {
        alert("Every Input field is Required.", "danger");
      }
    } catch (err) {
      alert(err.response.msg || "Some error happened. Try Again", "danger");
      setPostingData(false);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-content-center mt-3">
        <div className=" ">
          <h1 className="text-pink-600 text-5xl mt-20 mb-10">Add New Category</h1>
          <form onSubmit={newCategoryHandler}>
            <div className="addProductItem">
              <label className="form-label text-xl inline-block mb-2 text-gray-700">
                Background Image for Category
              </label>
              <input
                type="file"
                accept={fileInputTypes}
                onChange={onImageChange}
                className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                id="file"
              />
            </div>
            <div className="addProductItem">
              <label className="form-label text-xl inline-block mb-2 text-gray-700">Category Name</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                placeholder="Eg. Flowers"
                maxLength={18}
              />
            </div>
            <button
                disabled={postingData}
                className="inline-block px-6 m-5 mx-auto w-full py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out "
              >
                {postingData ? (
                  <img src="https://img.icons8.com/ios-filled/50/000000/loading-circle--v2.png" />
                ) : (
                  "Edit Category"
                )}
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
