// import "./newCategory.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import NotFoundPage from "../../pages/404/NotFoundPage";
import { isValidFiles } from "../../utils/helpers";
import api from "../../utils/api";
import alert from "../../components/alert/Alert";
import { editCategory } from "../../redux/categories/categorySlice";

export default function EditCategory({ url }) {
  const { categoryId } = useParams();

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => {
    console.log(state);
    return state.categories;
  });
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();

  const [editableCategory, setEditableCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(editableCategory?.name);
  const [image, setImage] = useState("");

  useEffect(() => {
    const reqCategory = categories.find((c) => c._id === categoryId);
    setEditableCategory(reqCategory);
  }, [categories, categoryId]);

  useEffect(() => {
    setName(editableCategory?.name);
  }, [editableCategory]);

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files.length === 1) {
      if (isValidFiles(files)) {
        // setImage(URL.createObjectURL(file));
        const file = files[0];
        setImage(file);
      } else {
        alert(`Wrong Files Type`, "danger");
        e.target.value = "";
        setImage("");
      }
    } else if (files.length === 0) {
      alert("Select atleast One Image", "danger");
    } else {
      alert("You can not select more than one image", "danger");
      e.target.value = "";
      setImage("");
    }
  };

  const editCategoryHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("name", name);

      if (image) {
        formData.append("image", image);
      }

      if (name === editableCategory?.name && !image) {
        alert("Edited Successfully");
        return history.push(`${url}/categories`);
      }

      const res = await api.put(
        `/categories/${editableCategory?._id}`,
        formData,
        {
          headers: { "x-auth-token": currentUser.token },
        }
      );

      console.log(res);

      setLoading(false);
      alert("Edited Successfully");
      dispatch(editCategory(res.data));
      history.push(`${url}/categories`);
    } catch (err) {
      console.log(err, err.response);
      alert(err.response.msg || "Some error happened. Try Again", "danger");
      setLoading(false);
    }
  };

  if (!editableCategory) return <NotFoundPage />;

  return (
    <div className="container text-center mx-auto ">
      <div className="">
        <div className="">
          <div className=" ">
            <h1 className="text-5xl p-10 mt-10 font-bold text-pink-800">
              Edit Category
            </h1>

            <form
              onSubmit={editCategoryHandler}
              className="w-96 text-left  mx-auto"
            >
              <div className="">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-xl inline-block mb-2 text-gray-700"
                  onChange={onImageChange}
                >
                  New Image
                </label>
                <input
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  type="file"
                  id="formFile"
                />
              </div>
              <p className="m-2">
                *Only Select image if you want to override the previous one.
              </p>

              <div>
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-xl inline-block mb-2 text-gray-700"
                >
                  {" "}
                  New Category Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  placeholder="Enter New Category Title"
                  maxLength={18}
                />
              </div>
              <button
                disabled={updatingData}
                className="inline-block px-6 m-5 mx-auto w-full py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out "
              >
                {updatingData ? (
                  <img src="https://img.icons8.com/ios-filled/50/000000/loading-circle--v2.png" />
                ) : (
                  "Edit Category"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
