import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SpaceLoader } from "../../components/loader/Loader";
import api from "./../../utils/api";
import "./order.css";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/orders", {
        headers: {
          "x-auth-token": currentUser.token,
        },
      });
      setOrders(data);
      setLoading(false);
    } catch (err) {
      console.log(err, err.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <SpaceLoader height="35vh" />;

  if (!orders.length)
    return (
      <div
        className="text-light d-flex align-items-center justify-content-center"
        style={{ height: "30vh" }}
      >
        <h2> No orders yet to show...</h2>
      </div>
    );
  return (
    <div className="container mt-5 text-white">
      <h1 className=" text-center mb-5 text-light">Welcome in <span className="text-golden">order Page</span></h1>
      <div className="row">
        <div className="col-lg-12 table-responsive">
          <table className="table table-striped table-light table-hover">
            <thead>
              <tr className="table-dark text-center">
                <th scope="col">Order Id</th>
                <th scope="col">User Email</th>
                <th scope="col">Total</th>
                <th scope="col">Date</th>
                <th scope="col">Order Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {orders.map((order) => (
                <OrderList url={url} order={order} key={order._id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const OrderList = ({ order, url }) => {
  const history = useHistory();
  const redirect = () => {
    history.push(`${url}/orders/${order._id}`);
  };
  return (
    <tr style={{ cursor: "pointer" }} onClick={redirect}>
      <th scope="row">{order._id}</th>

      <td>{order.user.email}</td>

      <td>Rs {order.amount}</td>
      <td>
        {/* 15-dec-2021 <b>10.00 PM</b> */}
        {new Date(order.createdAt).toLocaleDateString()}
      </td>
      <td>
        {" "}
        <div className="cercle me-2"></div> {order.status}
      </td>
    </tr>
  );
};

export default Order;
