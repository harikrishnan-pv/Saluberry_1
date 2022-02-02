import React, { useEffect, useState } from "react";
import { getCategoryImage } from "../services/categoryService";

const CategoryCard = ({ category }) => {
  const [categoryImageUrl, setCategoryImageUrl] = useState(null);

  const fetCategoryImageUrl = async (id) => {
    const { data } = await getCategoryImage(id);
    setCategoryImageUrl(data);
  };

  useEffect(() => {
    fetCategoryImageUrl(category._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div key={category.name} className="group relative">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={
            categoryImageUrl ||
            "https://asvs.in/wp-content/uploads/2017/08/dummy.png"
          }
          alt="Category."
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <a href="/#" >
          <span className="absolute inset-0" />
          {category.name}
        </a>
      </h3>
      {/* <p className="text-base font-semibold text-gray-900">
                      {callout.description}
                    </p> */}
    </div>
  );
};

export default CategoryCard;
