import Head from "next/head";
import Link from "next/link";
import { useGlobalContext } from "../components/context";
import HeroSection from "../components/herosection";
import loader from "../components/loader";

export async function getServerSideProps() {
  const res = await fetch("https://api.pujakaitem.com/api/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const { formatter,toCapitilize } = useGlobalContext();

  const featuredProducts = data.filter((val) => {
    return val.featured === true;
  });
  return (
    <>
      <div>
        <Head>
          <title>Eccomerce</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroSection />
        <h1 className="text-4xl font-bold text-pink-500 ml-3">
          Featured Products
        </h1>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              {!data ? (
               <loader/>
              ) : (
                featuredProducts.map((items) => {
                  const { id, image, category, name, price } = items;
                  return (
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={id}>
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center w-full h-full block"
                          src={image}
                        />
                        t
                      </a>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {category}
                        </h3>

                        <Link
                          href={id}
                        >
                          <h2 className="text-gray-900 title-font text-lg font-medium">
                            {toCapitilize(name)}
                          </h2>
                        </Link>
                        <p className="mt-1">
                          <span className="font-extrabold text-black"></span>
                          {formatter.format(price)}
                        </p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>

        {/* ====== Brands Section Start */}
        <section className="bg-white py-20 lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                      alt="image"
                      className="h-10 w-full"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                      alt="image"
                      className="h-10 w-full"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                      alt="image"
                      className="h-10 w-full"
                    />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                      alt="image"
                      className="h-10 w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      
      </div>
    </>
  );
}
