import React, { useState } from "react";
import alert from "../../components/alert/Alert";
import { useSelector } from "react-redux";
import api from "./../../utils/api";
import { useHistory } from "react-router-dom";
import { fileInputTypes, isValidFiles } from "../../utils/helpers";

const NewSlider = ({ url, setSavedSliderDatas }) => {
  const history = useHistory();
  const [newSlider, setNewSliderData] = useState({ images: "" });
  const [postingSliderData, setPostingSliderData] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  const onImageChange = (e) => {
    const files = e.target.files;
    if (files.length <= 3) {
      if (isValidFiles(files)) {
        // setImage(URL.createObjectURL(file));
        setNewSliderData((prev) => ({
          ...prev,
          images: files,
        }));
      } else {
        alert(`Wrong Files Type`, "danger");
        e.target.value = "";
        setNewSliderData((prev) => ({
          ...prev,
          images: "",
        }));
      }
    } else if (files.length === 0) {
      alert("Select atleast One Image", "danger");
    } else {
      alert("You can not select more than 6 images", "danger");
      e.target.value = "";
      setNewSliderData((prev) => ({
        ...prev,
        images: "",
      }));
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (newSlider.images) {
        setPostingSliderData(true);
        const sliderData = new FormData();
        for (let i = 0; i < newSlider.images.length; i++) {
          sliderData.append("images", newSlider.images[i]);
        }
        const { data: savedSliderDatas } = await api.post(
          "/slider/images",
          sliderData,
          {
            headers: { "x-auth-token": currentUser.token },
          }
        );
        setPostingSliderData(false);
        setSavedSliderDatas(savedSliderDatas);
        alert("New slider created successfully.", "success");
        history.push(`${url}/slider`);
      } else {
        alert("Images is Required.", "danger");
      }
    } catch (err) {
      alert(err.response.data || "Some Error Occured", "danger");
      setPostingSliderData(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-content-center mt-3">
        <div className=" ">
          <h1 className="text-pink-600 text-5xl mt-20 mb-10">New Slider</h1>
          <form onSubmit={onSubmitHandler}>
            <div className="addProductItem">
              <label className="form-label text-xl inline-block mb-2 text-gray-700">
                Images
              </label>
              <input
                type="file"
                className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                id="file"
                multiple
                accept={fileInputTypes}
                onChange={onImageChange}
              />
            </div>
            <button
              disabled={updatingData}
              className="inline-block px-6 m-5 mx-auto w-full py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out "
            >
              {updatingData ? (
                <img src="https://img.icons8.com/ios-filled/50/000000/loading-circle--v2.png" />
              ) : (
                "Create New Slider"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSlider;
