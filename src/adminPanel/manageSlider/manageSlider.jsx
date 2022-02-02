import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import alert from "../../components/alert/Alert";
import api from "./../../utils/api";

const ManageSlider = ({ url, savedSliderDatas, setSavedSliderDatas }) => {
  const [sliderDatas, setSliderDatas] = useState([]);

  const { currentUser } = useSelector((state) => state.user);

  const fetchData = async () => {
    const { data } = await api.get("/slider/images");
    setSliderDatas(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteSliderImage = async (sliderImageId) => {
    try {
      const { data: deletedSliderImage } = await api.delete(
        `/slider/images/${sliderImageId}`,
        {
          headers: { "x-auth-token": currentUser.token },
        }
      );

      const updatedSliderDatas = savedSliderDatas.filter(
        (savedSliderData) => savedSliderData._id !== deletedSliderImage._id
      );
      setSliderDatas(updatedSliderDatas);
      setSavedSliderDatas(updatedSliderDatas);

      alert("Deleted Successfully");
    } catch (err) {
      alert(err.response.msg || "Some error happened. Try Again", "danger");
    }
  };

  return (
    <div className="container text-center mx-auto ">
      <div className="grid mt-20 grid-cols-2">
        <h2 className="text-5xl text-pink-600">Manage Slider</h2>
        <Link to={`${url}/slider/new`} className="my-1">
          <button
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            New Slider
          </button>
        </Link>
      </div>
      {sliderDatas.map((sliderData, index) => (
        <div className="grid mt-10 grid-cols-3">
          <div className="my-2">
            <img src={sliderData.data} alt="" className="img-fluid" />
          </div>
          <div className="flex sm:justify-end">
            <h4 className="text-gray-600 text-2xl">Image {index + 1}</h4>
          </div>
          <div className="flex justify-center sm:justify-items-end">
            <Link
              to={`${url}/slider/images/edit/${sliderData._id}`}
              className="mr-3"
            >
              <button
                type="button"
                className=" px-6 pt-2.5  pb-2 bg-blue-600 text-white font-medium text-xs  leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
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
              onClick={() => deleteSliderImage(sliderData._id)}
              className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
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
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ManageSlider;
