/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import "./subCategories.css";
import { Link } from "react-router-dom";
import api from "./../../utils/api";
import alert from "../../components/alert/Alert";
import { SpaceLoader } from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addAllSubs } from "../../redux/subCategory/subCategorySlice";
import { delSubCategory } from "../../redux/subCategory/subCategorySlice";

const SubCategories = ({ url }) => {
  const dispatch = useDispatch();
  const [allSubCategories, setAllSubCategories] = useState([]);
  const { allSubs } = useSelector((state) => state.subCategories);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (allSubs.length !== 0) {
      return setAllSubCategories(allSubs);
    }
    setLoading(true);
    const { data } = await api.get("/subcategories");
    setAllSubCategories(data);
    dispatch(addAllSubs(data));

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <SpaceLoader height="60vh" />;

  return (
    <>
      <div className="container mt-5 text-white">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h3 className="mb-1 text-light">
                All Available{" "}
                <strong className="text-golden">Sub-Categories</strong>
              </h3>
              <h6 className="text-muted text-golden">
                (Currently {allSubCategories.length} available)
              </h6>
            </div>

            <div>
              <Link to={`${url}/subcategories/new`}>
                <button className=" btn btn golden-button ">
                  Create New Sub-Category
                  <i className="far fa-plus-square mx-2"></i>
                </button>
              </Link>
            </div>
          </div>

          <hr className="text-muted" />
          {/* dropdown end here */}

          <table className="table text-light">
            <thead>
              <tr className="text-center text-golden">
                <th scope="col-1">S.no</th>
                <th scope="col-2">SubCategory Name</th>
                <th scope="col-2">Parent Category</th>
                <th scope="col-6">Action</th>
              </tr>
            </thead>
            {allSubCategories.map((sub, index) => (
              <SubCategoryList
                baseUrl={url}
                key={sub._id}
                subCategory={sub}
                serialNr={index + 1}
              />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default SubCategories;

const SubCategoryList = ({ subCategory, serialNr, baseUrl }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const deleteCategory = async (id) => {
    try {
      const res = await api.delete(
        `/subcategories/${id}`,
        {
          headers: { "x-auth-token": currentUser.token },
        }
      );

      alert("Deleted Successfully");
      dispatch(delSubCategory(res.data));
      // history.push('/admin-panel/categories');
      window.location = '/admin-panel/subcategories'
    } catch (err) {
      console.log(err, err.response);
      alert(err.response.msg || "Some error happened. Try Again", "danger");
    }
  };

  return (
    <tbody>
      <tr className="text-center">
        <th scope="row">{serialNr}</th>
        <th>
          <h5 className="fw-700 fs-lg  ">{subCategory.name}</h5>
        </th>
        <th>
          <h5 className="fw-700 fs-lg  ">{subCategory.category.name}</h5>
        </th>
        <td>
          <div>
            <Link
              to={`${baseUrl}/subcategories/edit/${subCategory._id}`}
              className="me-3"
            >
              <button className="btn btn btn-dark ">
                <i className="far fa-edit"></i>
              </button>
            </Link>
            <button
              onClick={() => deleteCategory(subCategory._id)}
              className="btn btn btn-danger "
            >
              <i className="far fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
