import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import alert from "../../../components/alert/Alert";
import { SpaceLoader } from "../../../components/loader/Loader";
import NotFoundPage from "../../../pages/404/NotFoundPage";
import {
  addAllSubs,
  editSubCategory,
} from "../../../redux/subCategory/subCategorySlice";
import { isValidFiles } from "../../../utils/helpers";
import api from "./../../../utils/api";

export default function EditSubCat({ url }) {
  const { subcategoryId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { categories } = useSelector((state) => state.categories);
  const { currentUser } = useSelector((state) => state.user);
  const { allSubs } = useSelector((state) => state.subCategories);

  const [editableSubCategory, setEditableSubCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [makingReq, setMakingReq] = useState(false);

  const [editData, setEditData] = useState(() => {
    return {
      name: "",
      image: "",
      parentCategory: "",
    };
  });

  const fetchData = async () => {
    if (allSubs.length !== 0) {
      const req = allSubs.find((sub) => sub._id === subcategoryId);
      setEditData((prev) => {
        const parentCategory = categories.find(
          (cat) => cat._id === req.category._id
        );
        return {
          ...prev,
          name: req.name,
          parentCategory,
        };
      });
      return setEditableSubCategory(req);
    }
    setLoading(true);
    const { data } = await api.get("/subcategories");
    const req = data.find((sub) => sub._id === subcategoryId);
    setEditableSubCategory(req);
    setEditData((prev) => {
      const parentCategory = categories.find(
        (cat) => cat._id === req.category._id
      );
      return {
        ...prev,
        name: req.name,
        parentCategory,
      };
    });
    dispatch(addAllSubs(data));
    setLoading(false);
  };

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files.length === 1) {
      if (isValidFiles(files)) {
        // setImage(URL.createObjectURL(file));
        const file = files[0];
        setEditData((prev) => ({
          ...prev,
          image: file,
        }));
      } else {
        alert(`Wrong Files Type`, "danger");
        e.target.value = "";
        setEditData((prev) => ({
          ...prev,
          image: "",
        }));
      }
    } else if (files.length === 0) {
      alert("Select atleast One Image", "danger");
    } else {
      alert("You can not select more than one image", "danger");
      e.target.value = "";
      setEditData((prev) => ({
        ...prev,
        image: "",
      }));
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [subcategoryId]);

  const editSubCategoryHandler = async (e) => {
    e.preventDefault();
    try {
      setMakingReq(true);

      const formData = new FormData();
      formData.append("name", editData.name);
      formData.append("categoryId", editData.parentCategory._id);

      if (editData.image) {
        formData.append("image", editData.image);
      }

      if (
        editData.name === editableSubCategory?.name &&
        !editData.image &&
        editData.parentCategory === editableSubCategory.category._id
      ) {
        alert("Edited Successfully");
        return history.push(`${url}/subcategories`);
      }

      const res = await api.put(
        `/subcategories/${editableSubCategory._id}`,
        formData,
        {
          headers: { "x-auth-token": currentUser.token },
        }
      );

      console.log(res);

      setLoading(false);
      alert("Edited Successfully");
      dispatch(editSubCategory(res.data));
      history.push(`${url}/categories`);

      setMakingReq(false);
      history.push(`${url}/subcategories`);
    } catch (err) {
      alert(err.response?.data || "Some error happened. Try Again", "danger");
      console.log(err, err.response);
      setMakingReq(false);
    }
  };

  if (!editableSubCategory) return <NotFoundPage />;
  if (loading) return <SpaceLoader height="60vh" />;

  return (
    <div className="container mx-auto ">
      <div className="row d-flex justify-content-center mt-3">
        <div className=" col-new">
          <h1 className="text-golden mb-3 mt-3">Edit SubCategory</h1>
          <form onSubmit={editSubCategoryHandler}>
            <div className="addProductItem mb-4">
              <label className="form-label text-light">New Image</label>
              <input
                type="file"
                className="form-control"
                id="file"
                onChange={onImageChange}
              />
              <span className="text-light mt-1" style={{ fontSize: "0.85rem" }}>
                *Only Select image if you want to override the previous one.
              </span>
            </div>
            <div className="addProductItem">
              <label className="form-label text-light"> New Category Name</label>
              <input
                value={editData.name}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, name: e.target.value }))
                }
                type="text"
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
                value={editData.parentCategory._id}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    parentCategory: e.target.value,
                  }));
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
              disabled={makingReq}
              className="btn golden-button mt-3 mb-3 align-item-center w-100"
            >
              {makingReq ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                "Edit SubCategory"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
