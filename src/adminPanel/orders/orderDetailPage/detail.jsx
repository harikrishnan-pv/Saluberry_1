import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import alert from "../../../components/alert/Alert";
import {
  AbsoluterLoader,
  SpaceLoader,
} from "../../../components/loader/Loader";
import NotFoundPage from "../../../pages/404/NotFoundPage";
import api from "./../../../utils/api";
import "./detail.css";

const Detail = () => {
  const orderStatus = [
    "Cancelled",
    "Delivered",
    "Shipped",
    "Processing",
    "Order Placed",
  ];
  const { orderId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const [order, setOrder] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [settingStatus, setSettingStatus] = useState(false);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/orders/${orderId}`, {
        headers: { "x-auth-token": currentUser.token },
      });
      setLoading(false);
      setOrder(data);
      setStatus(data.status);
    } catch (err) {
      setLoading(false);
      setShowError(true);
      alert(err.response.data || "Something went Wrong. Try Again!");
    }
  };

  const changeStatus = async (e) => {
    try {
      setStatus(e.target.value);
      setSettingStatus(true);
      await api.put(
        `/orders/${order._id}/status`,
        { status: e.target.value },
        {
          headers: { "x-auth-token": currentUser.token },
        }
      );
      alert("Order Status Changed.");
      setSettingStatus(false);
    } catch (err) {
      console.log(err);
      setSettingStatus(false);
      alert(err.response.data || "Something went Wrong. Try Again!");
    }
  };

  useEffect(() => {
    fetchOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <SpaceLoader height="40vh" />;

  if (showError) return <NotFoundPage />;

  return (
    <>
      <div className="container mt-5">
        {settingStatus && <AbsoluterLoader />}
        <div className="row ">
          <h2 className="text-golden mb-4">Order Details</h2>
        </div>
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-2 mb-4">
            <div
              className="card justify-content-center align-items-center card-detail"
              style={{ background: "#333" }}
            >
              <div
                className="card-body lh-2 px-5 py-5 d-flex"
                style={{
                  alignItems: "flex-start",
                  boxShadow: "none",
                  background: "transparent",
                }}
              >
                <h5
                  className="card-title  my-1 text-golden"
                  style={{ alignSelf: "left" }}
                >
                  Customer Details
                </h5>
                <h6 className="card-subtitle mb-3 text-muted mt-3">
                  <b>
                    <span className="me-2">Name: </span>
                  </b>
                  {order.user?.firstName} {order.user?.lastName}
                </h6>
                <h6 className="card-subtitle mb-3 text-muted">
                  <b>
                    <span className="me-2">Contact No:</span>
                  </b>
                  {order.phone}
                </h6>
                <h6 className="card-subtitle mb-3 text-muted">
                  <b>
                    <span className="me-2">City:</span>
                  </b>
                  {order.address?.city}
                </h6>
                <h6 className="card-subtitle mb-3 text-muted">
                  <b>
                    <span className="me-2">Email:</span>
                  </b>
                  {order.user?.email}
                </h6>
                <h5
                  className="card-title text-golden my-3 mb-3"
                  style={{ alignSelf: "left" }}
                >
                  Shipping Details
                </h5>
                <h6 className="card-subtitle mb-3 text-muted">
                  <b>
                    <span className="me-2">Locality:</span>
                  </b>
                  {order.address?.locality}
                </h6>
                <h6 className="card-subtitle mb-3 text-muted">
                  <b>
                    <span className="me-2">City:</span>
                  </b>
                  {order.address?.city}
                </h6>
                <h6 className="card-subtitle mb-3 text-muted">
                  <b>
                    <span className="me-2">PinCode:</span>
                  </b>
                  {order.address?.pincode}
                </h6>
                <h5
                  className="card-title text-golden my-1"
                  style={{ alignSelf: "left" }}
                >
                  Order Total: Rs{" "}
                  <span className="text-light fs-3">{order.amount}</span>
                </h5>
                <h6 className="mt-3 mb-2 text-white">Order Status</h6>
                <select
                  className="form-select mt-2"
                  aria-label="Default select example"
                  value={status}
                  onChange={changeStatus}
                >
                  {orderStatus.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className=" col-12 col-md-6 col-lg-8 d-flex justify-content-center ">
            <div
              className=" d-flex justify-content-center align-items-center card-detail"
            >
              <div className="card-body lh-2 box-shadow-none">
  
                <h5 className="  text-golden my-3" style={{ alignSelf: "left" }}>
                  Products Details
                </h5>
                <ul
                  className="list-group list-group-flush text-white"
                >
                  {order.products?.map((prod) => (
                    <div
                      key={prod._id}
                      className="d-flex justify-content-between align-items-center"
                      // style={{ borderBottom: "1px solid gray" }}
                    >

                      <div className="row d-flex justify-content-center">
                        <div className="col-4  ">
                        <h5 className="card-subtitle mb-3 text-muted fs-6">
                        Name: <b>{prod.name}</b>
                      </h5>
                        </div>
                        <div className="col-4 ">
                      <h5 className="card-subtitle mb-3 text-muted fs-6">
                        Quantity: <b>{prod.quantity}</b>
                      </h5>
                      </div>
                      <div className="col-4">

                      <h5 className="card-subtitle mb-3 text-muted fs-6">
                        Unit Price: <b>Rs {prod.unit_price}</b>
                      </h5>

                      </div>
                      </div>
                   
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
