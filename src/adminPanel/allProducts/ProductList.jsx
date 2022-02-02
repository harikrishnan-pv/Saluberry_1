/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
// import "./subCategories.css";
import { Link } from "react-router-dom";
import api from "./../../utils/api";
import alert from "../../components/alert/Alert";
import { SpaceLoader } from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts, delProduct } from "../../redux/products/productsSlice";
import { useHistory } from "react-router-dom";

const ProductsPage = ({ url }) => {
  const dispatch = useDispatch();
  const [productsArr, setProductsArr] = useState([]);
  // const { allProducts } = useSelector((state) => {
  //   return state.products
  //  });
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    // These three lines are commented by ady.
    // if (allProducts.length !== 0) {
    //   return setProductsArr(allProducts);
    // }
    setLoading(true);
    const { data } = await api.get("/products");
    setProductsArr(data);
    dispatch(addAllProducts(data));

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { categories } = useSelector((state) => {
  //   console.log(state);
  //   return state.categories
  //  });

  if (loading) return <SpaceLoader height="60vh" />;

  return (
    <>
      <div className="container mx-auto text-center">
        <div className="">
          <div>
            <h3 className="text-4xl p-5 mt-10">
              All Available <strong className="text-pink-700">Products</strong>
            </h3>
          </div>

          <div className="grid-cols-2 grid">
            <h6 className="px-6 py-2.5">
              (Currently {productsArr.length} available)
            </h6>
            <Link to={`${url}/products/new`}>
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Create New Product
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
                  <thead class="border-b bg-blue-600">
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
                        Product Name
                      </th>
                      <th
                        scope="col-3"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Price
                      </th>
                      <th
                        scope="col-4"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Stock left
                      </th>
                      <th
                        scope="col-5"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Parent Category/ SubCategory
                      </th>
                      <th
                        scope="col-6"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {productsArr.map((prod, index) => (
                    <ProductsList
                      baseUrl={url}
                      key={prod._id}
                      product={prod}
                      serialNr={index + 1}
                      products={productsArr}
                      setProducts={setProductsArr}
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

export default ProductsPage;

const ProductsList = ({
  product,
  serialNr,
  baseUrl,
  products,
  setProducts,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);

  const deleteProduct = async (id) => {
    try {
      const res = await api.delete(`/products/${id}`, {
        headers: { "x-auth-token": currentUser.token },
      });

      alert("Deleted Successfully");
      dispatch(delProduct(res.data));
      history.push("/admin-panel/products");
      const savedProducts = products.filter((p) => p._id !== id);
      setProducts(savedProducts);
      // window.location = '/admin-panel/categories'
    } catch (err) {
      console.log(err, err.response);
      alert(err.response.msg || "Some error happened. Try Again", "danger");
    }
  };

  return (
    <tbody>
      <tr className="bg-white border-b">
        <th scope="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {serialNr}
        </th>
        <th>
          <h5 className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {product.name}
          </h5>
        </th>
        <th>
          <h5 className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
            Rs {product.amount}
          </h5>
        </th>
        <th>
          <h5 className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {" "}
            {product.stock}
          </h5>
        </th>
        <th>
          <h5 className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {product.category.name} / {product.subCategory?.name}
          </h5>
        </th>
        <td>
          <div className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
            <Link
              to={`${baseUrl}/products/edit/${product._id}`}
              className="me-2"
            >
              <button
                type="button"
                class=" px-6 pt-2.5  pb-2 bg-blue-600 text-white font-medium text-xs  leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
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
              onClick={() => deleteProduct(product._id)}
              class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
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
            ;
          </div>
        </td>
      </tr>
    </tbody>
  );
};
<button
  onClick={() => deleteProduct(product._id)}
  class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
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
</button>;
