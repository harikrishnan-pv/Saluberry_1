import { useSelector } from "react-redux";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import NotFoundPage from "../pages/404/NotFoundPage";
import "./admin.css";
import ProductList from "./allProducts/ProductList";
import AdminCategories from "./Categories/AdminCategories";
import EditCategory from "./editCategory/editCategory";
import EditProduct from "./editProduct/editProduct";
import EditSliderImage from "./manageSlider/editSliderImage";
import ManageSlider from "./manageSlider/manageSlider";
import NewSlider from "./manageSlider/newSlider";
import NewCategory from "./newCategory/newCategory";
import NewProduct from "./newProduct/NewProduct";
import Order from "./orders/Order";
import Detail from "./orders/orderDetailPage/detail";
import EditSubCat from "./subCategories/editSubCategory/EditSubCat";
import NewSubCat from "./subCategories/newSubCategory/NewSubCat";
import SubCategories from "./subCategories/SubCategories";

const Admin = ({ savedSliderDatas, setSavedSliderDatas }) => {
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);
  const { path, url } = useRouteMatch();

  // if (!currentUser || !currentUser.isAdmin) {
  if (!currentUser) {
    history.push({
      pathname: "/signin",
      state: { redirect: `/admin-panel` },
    });
  }

  if (currentUser && !currentUser.isAdmin) {
    return <NotFoundPage />;
  }

  return (
    <Switch>
      <Route exact path={path}>
        <AdminIndexPage url={url} />
      </Route>
      <Route exact path={`${path}/slider`}>
        <ManageSlider
          url={url}
          setSavedSliderDatas={setSavedSliderDatas}
          savedSliderDatas={savedSliderDatas}
        />
      </Route>
      <Route exact path={`${path}/slider/new`}>
        <NewSlider url={url} setSavedSliderDatas={setSavedSliderDatas} />
      </Route>
      <Route path={`${path}/slider/images/edit/:imageId`}>
        <EditSliderImage
          url={url}
          setSavedSliderDatas={setSavedSliderDatas}
          savedSliderDatas={savedSliderDatas}
        />
      </Route>
      <Route exact path={`${path}/categories`}>
        <AdminCategories url={url} />
      </Route>
      <Route path={`${path}/categories/new`}>
        <NewCategory url={url} />
      </Route>
      <Route path={`${path}/categories/edit/:categoryId`}>
        <EditCategory url={url} />
      </Route>
      <Route exact path={`${path}/subcategories`}>
        <SubCategories url={url} />
      </Route>
      <Route path={`${path}/subcategories/new`}>
        <NewSubCat url={url} />
      </Route>
      <Route path={`${path}/subcategories/edit/:subcategoryId`}>
        <EditSubCat url={url} />
      </Route>
      <Route exact path={`${path}/products`}>
        <ProductList url={url} />
      </Route>
      <Route path={`${path}/products/new`}>
        <NewProduct url={url} />
      </Route>
      <Route path={`${path}/products/edit/:productId`}>
        <EditProduct url={url} />
      </Route>
      <Route exact path={`${path}/orders`}>
        <Order url={url} />
      </Route>
      <Route exact path={`${path}/orders/:orderId`}>
        <Detail url={url} />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

const AdminIndexPage = ({ url }) => {
  const { currentUser } = useSelector((state) => state.user);
  const baseUrl = url.endsWith("/") ? url.split("").slice(0, -1).join("") : url;
  return (
    <>
      <div>
        <div className="container text-center mx-auto">
          <h1 className="text-6xl mt-10 font-bold">Admin Panel</h1>
          <h1 className="text-2xl mt-14 text-pink-600">
            Manage all of your products and orders here.
          </h1>
          <div className="shadow-lg mx-auto  mt-20 lg:w-3/6 rounded-lg p-8">
            <h1 className="text-3xl  text-pink-800 font-bold">
              Manage Categories
            </h1>
            <ul>
              <li>
                <Link
                  to={`${baseUrl}/slider`}
                  className="text-xl mt-10 hover:bg-pink-700 hover:text-white rounded-lg p-1"
                >
                  Manage Banner/Slider
                </Link>
              </li>
              <li>
                <Link
                  to={`${baseUrl}/categories`}
                  className="text-xl mt-2 hover:bg-pink-700 hover:text-white rounded-lg p-1"
                >
                  Manage Categories
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/products`} className="card-link">
                  Manage Products
                </Link>
              </li>
              <li>
                <Link to={`${baseUrl}/orders`} className="card-link">
                  Manage Orders
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
