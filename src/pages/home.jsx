import React from "react";
import Slider from "react-slick";

const products = [
  {
    id: 1,
    name: "Virback Enzymatic Toothpaste kit",
    href: "#",
    imageSrc: "imgs/1.jpg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Bilistic pro series dental tooth polisher",
    href: "#",
    imageSrc: "imgs/2.jpg",
    imageAlt: "",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Montopack Bamboo Wooden Toothpick",
    href: "#",
    imageSrc: "imgs/3.jpg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Sonic Toothbrush",
    href: "#",
    imageSrc: "imgs/4.jpg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Dental Care Prosthodonics",
    href: "#",
    imageSrc: "imgs/5.jpg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },

  {
    id: 1,
    name: "Over the counter whitening",
    href: "#",
    imageSrc: "imgs/6.jpeg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Hello Antiplaque",
    href: "#",
    imageSrc: "imgs/7.jpg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Dental Implants",
    href: "#",
    imageSrc: "imgs/8.jpg",
    imageAlt: "Front of men's lorem ipsum in black.",
    price: "$35",
    color: "Black",
  },
];

const categories = [
  {
    description: "Accessories",
    imageSrc: "imgs/11.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    description: "Animal Dental Care",
    imageSrc: "imgs/12.png",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    description: "Children's Dental care",
    imageSrc: "imgs/13.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    description: "Detal Care and Prosthodonics",
    imageSrc: "imgs/14.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel z-1  container mx-auto slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src="https://s3.images-iherb.com/cms/banners/cdflbanner0119_002ar-sa.jpg"
              class="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://s3.images-iherb.com/cms/banners/ultsbanner0119_003ar-sa.jpg"
              class="block w-full"
              alt="Camera"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src="https://s3.images-iherb.com/cms/banners/SA_shipping_1022_003ar-sa.jpg"
              class="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
      </div>

      <a href="/best_seller">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-4xl mb-10 font-extrabold tracking-tight text-pink-700">
              Most Loved Products
            </h2>

            <div>
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md  group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
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
                    </div>
                    <div className="mt-10 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
      </a>

      <div>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Categories
              </h2>

              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {categories.map((callout) => (
                  <div key={callout.name} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={callout.href}>
                        <span className="absolute inset-0" />
                        {callout.name}
                      </a>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="/recent_arrivals">
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Featured Products
            </h2>

            <div>
              <Slider {...settings} className="pt-10">
                {products.map((product) => (
                  <div key={product.id} className="group px-10 relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
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
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div>
              <Slider {...settings} className="pt-10">
                {products.map((product) => (
                  <div key={product.id} className="group px-10 relative">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
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
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
