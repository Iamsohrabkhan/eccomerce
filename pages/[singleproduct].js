import React, { useState } from "react";
import Head from "next/head";
import { useGlobalContext } from "../components/context";
import { BsStarFill, BsStarHalf, BsStar, BsCheck } from "react-icons/bs";

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://api.pujakaitem.com/api/products?id=${query.singleproduct}`
  );
  const data = await res.json();
  return {
    props: {
      data: data || null,
    },
  };
}

const singleproduct = ({ data }) => {
  const { formatter, toCapitilize } = useGlobalContext();
  const {
    name,
    company,
    category,
    stock,
    reviews,
    stars,
    image,
    description,
    price,
    colors,
  } = data;
  const [checkColor, setCheckColor] = useState(colors[0]);
  const ratingStar = [1, 2, 3, 4, 5];
  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        
        <div className="container px-5 py-12 mx-auto">
        
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded hover:opacity-90"
              src={image[0].url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {toCapitilize(company)}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {toCapitilize(name)}
              </h1>
              <div className="flex mb-4 ">
                <span className="flex items-center text-yellow-500 space-x-1">
                  {ratingStar.map((val,i) => {
                    // console.log(val+0.5);
                    return (
                      <div key={i}>
                        {stars >= val ? (
                          <BsStarFill />
                        ) : Math.ceil(stars) >= val ? (
                          <BsStarHalf />
                        ) : (
                          <BsStar />
                        )}
                      </div>
                    );
                  })}
                  {/* <BsStarFill/>                
                  <BsStarFill/>                
                  <BsStarFill/>
                  <BsStarHalf/>
                  <BsStar/>                */}
                  <span className="text-gray-600 ml-5 align-middle">
                    {reviews} Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{description}.</p>
              <div className="flex flex-col mt-6 spy pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {colors.map((val, i) => {
                    return (
                      
                        <button key={i}
                          className={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none opacity-80 hover:opacity-100`}
                          style={{ backgroundColor: `${val}` }}
                          onClick={() => {
                            setCheckColor(colors[i]);
                          }}
                        >
                          {val === checkColor ? (
                            <BsCheck className="text-white text-xl" />
                          ) : null}
                        </button>
                      
                    );
                  })}
                </div>

                <div className="stock ml-1 text-xl">
                  Items in Stocks: {stock}
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {formatter.format(price)}
                </span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-400 rounded">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default singleproduct;
