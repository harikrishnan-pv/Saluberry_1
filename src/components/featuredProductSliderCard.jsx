import React, { useEffect, useState } from "react";
import { getProductImage } from "../services/productService";

const FeaturedProductSliderCard = ({ featuredProduct }) => {
  const [productImageUrl, setProductImageUrl] = useState(null);

  const fetchProductImageUrl = async (id) => {
    const { data } = await getProductImage(id);
    setProductImageUrl(data);
  };

  useEffect(() => {
    fetchProductImageUrl(featuredProduct._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div key={featuredProduct._id} className="group px-10 relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={
            productImageUrl ||
            "https://asvs.in/wp-content/uploads/2017/08/dummy.png"
          }
          alt="Featured Product"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="w-full opacity-0 flex  group-hover:opacity-100 Z-4 align-bottom justify-center h-5/6 position-absolute bottom-0 object-center object-cover lg:w-full lg:h-full ">
        <svg
          className="w-8 mr-2  h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="/#">
              <span aria-hidden="true" className="absolute inset-0" />
              {featuredProduct.name}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${featuredProduct.amount}
        </p>
      </div>
    </div>
  );
};

export default FeaturedProductSliderCard;
