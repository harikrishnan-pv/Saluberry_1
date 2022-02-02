import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isValidFiles } from "../../utils/helpers";
import alert from "../../components/alert/Alert";
import api from "../../utils/api";

const EditSliderImage = ({ url, savedSliderDatas, setSavedSliderDatas }) => {
  const { imageId } = useParams();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

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

  const editBannerImageHandler = async (e) => {
    console.log("Image is editting...");

    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();

      if (!image) {
        alert("Select an image");
        setLoading(false);
        return;
      }

      formData.append("image", image);

      const { data: savedSliderImage } = await api.put(`/slider/images/${imageId}`, formData, {
        headers: { "x-auth-token": currentUser.token },
      });

      console.log(savedSliderImage);
      setLoading(false);
      const edittedSavedSliderDatas = savedSliderDatas.map(savedSliderData => {
        if (savedSliderData._id === savedSliderImage._id) {
          savedSliderData.data = savedSliderImage.data;
        }

        return savedSliderData;
      });
      setSavedSliderDatas(edittedSavedSliderDatas);
      alert("Edited Successfully");
      history.push(`${url}/slider`);
    } catch (err) {
      //   console.log(err, err.response);
      alert(err.response.msg || "Some error happened. Try Again", "danger");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto ">
      <div className="flex justify-items-center">
        <div className="">
          <h1 className="text-pink-600 text-5xl mt-20 mb-10">Edit Image</h1>
          <form onSubmit={editBannerImageHandler} className="">
            <div className=" mb-4">
              <label className="form-label text-xl inline-block mb-2 text-gray-700">New Image</label>
              <input
                type="file"
                className="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                id="file"
                onChange={onImageChange}
              />
              <p className="m-2">
                *Only Select image if you want to override the previous one.
              </p>
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
  );
};

export default EditSliderImage;
