import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import alert from "../../components/alert/Alert";
import ConfirmationModal from "../../components/confirmationModal/ConfirmationModal";
import { delCategory } from "../../redux/categories/categorySlice";

const AdminCategories = ({ url }) => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <>
      <div className="container mx-auto text-center">
        <div className="">
          <div>
            <h3 className="text-4xl p-5 mt-10">
              All Available{" "}
              <strong className="text-pink-700">Categories</strong>
            </h3>
          </div>

          <div className="grid-cols-2 grid">
            <h6 className="px-6 py-2.5">(Currently available)</h6>
            <Link to={`${url}/categories/new`}>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Create New Category
              </button>
            </Link>
          </div>
        </div>

        <hr className="" />
        {/* dropdown end here */}

        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <thead class="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col-1"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Serial No.
                      </th>
                      <th
                        scope="col-2"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Category Name
                      </th>

                      <th
                        scope="col-4"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {categories.map((category, index) => (
                    <CategoryList
                      baseUrl={url}
                      key={category._id}
                      category={category}
                      serialNr={index + 1}
                    />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CategoryList = ({ category, serialNr, baseUrl }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);

  const deleteCategory = async (id) => {
    console.log(id);
    console.log("Admin delete", `/categories/${id}`);
    try {
      const res = await api.delete(`/categories/${id}`, {
        headers: { "x-auth-token": currentUser.token },
      });

      console.log(res.data);
      alert("Deleted Successfully");
      dispatch(delCategory(res.data));
      // history.push('/admin-panel/categories');
      window.location = "/admin-panel/categories";
    } catch (err) {
      console.log(err, err.response);
      alert(err.response.msg || "Some error happened. Try Again", "danger");
    }
  };

  return (
    <>
      <tbody className="text-white">
        <tr className="text-center">
          <th scope="row">{serialNr}</th>
          <th>
            <h5 className="fw-700 fs-lg  ">
              {category.name}{" "}
              <span className="text-muted fs-6">
                ( "{category.subCategories?.length || 0}" Subcategoies under
                this. )
              </span>
            </h5>
          </th>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <div>
              <Link
                to={`${baseUrl}/categories/edit/${category._id}`}
                className="me-3"
              >
                <button
                  type="button"
                  class=" mx-auto px-6 pt-2.5  pb-2 bg-blue-600 text-white font-medium text-xs  leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
              </Link>
              <button
                data-bs-toggle="modal"
                data-bs-target={`#modal${category._id}`}
                // data-bs-target="#check"
                // onClick={() => deleteCategory(category._id)}
                class=" mx-auto px-6 pt-2.5  pb-2 bg-blue-600 text-white font-medium text-xs  leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <ConfirmationModal
        deleteHandler={deleteCategory}
        id={category._id}
        msg="This action is irreversible. All SubCategories and Products under this will be deleted."
      />
    </>
  );
};

export default AdminCategories;
