import React from "react";
    
const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },

  // More products...
];

function Checkout() {
  return (
    <div>
      <div className="container mx-auto mt-20">
        <div className="text-3xl font-bold  text-gray-700 text-right">
          Total
          <span className="text-pink-700"> (1 item) : $ 200</span>
        </div>
        <div class="flex flex-col border p-10 mt-5">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        SubTotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      {products.map((product) => (
                        <li key={product.id} className="py-6 px-10 flex">
                          <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
                              alt="product"
                              className="w-full h-full object-center object-cover"
                            />
                          </div>

                          <div className="ml-8 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="/#">Product Name</a>
                                </h3>
                                <p className="ml-4">Price $</p>
                              </div>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-pink-600 hover:text-pink-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        1
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        $
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 justify-end">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            data-bs-toggle="modal"
            data-bs-target="#placeordermod"
            class="inline-block px-6 py-2.5  bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Place Order
          </button>
        </div>
        <div
          class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="placeordermod"
          tabindex="-1"
          aria-labelledby="exampleModalCenteredScrollable"
          aria-modal="true"
          role="dialog"
        >
          <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div class="modal-header p-5 flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  class="text-xl font-medium leading-normal text-gray-800"
                  id="Scrollable"
                >
                  Your Order is getting placed
                  <br />
                  <span className="text-lg text-pink-700">
                    Fill in the details to proceed
                  </span>{" "}
                </h5>
                <button
                  type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body relative p-4">
                <form className="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="fname" className="sr-only">
                       Mobile Number
                      </label>
                      <input
                        id="mnumber"
                        name="mnumber"
                        type="text"
                        autoComplete="Mobile Number"
                        required
                        className="appearance-none rounded-none relative block my-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <p className="px-3">We will send you an OTP to verify your number.</p>
                    <div>
                      <label htmlFor="fname" className="sr-only">
                        Locality*
                      </label>
                      <input
                        id="locality"
                        name="locality"
                        type="text"
                        autoComplete="Locality"
                        required
                        className="appearance-none rounded-none relative block my-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        placeholder="Locality*"
                      />
                    </div>
                    <div>
                      <label htmlFor="fname" className="sr-only">
                        City*
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="City"
                        required
                        className="appearance-none rounded-none relative block my-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        placeholder="City*"
                      />
                    </div>
                    <div>
                      <label htmlFor="fname" className="sr-only">
                        Pincode*
                      </label>
                      <input
                        id="pin"
                        name="pin"
                        type="text"
                        autoComplete="Pincode"
                        required
                        className="appearance-none rounded-none relative block my-2 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                        placeholder="Pincode*"
                      />
                    </div>
                  </div>

                  
                </form>
              </div>
              <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                >
                  Verify Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
