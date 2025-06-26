import React from "react";
import ShopHero from "../../Components/SingleComponents/ShopHero";
import FourGroup from "../../Components/SingleComponents/FourGroup";
import ProductSliderShop from "../../Components/SingleComponents/ProductSliderShop";
import { Helmet } from "react-helmet";

export default function Shop() {
    const data = [
        {
            logo: "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828068/image_1_ywy5vs.png",
            txt: "FROM THE ISLANDS OF FIJI",
        },
        {
            logo: "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828083/image_3_vbsj7c.png",
            txt: "UNTOUCHED BY MAN",
        },
        {
            logo: "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828099/image_2_wxjxov.png",
            txt: "100% NATURAL ELECTROLYTES",
        },
        {
            logo: "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828113/image_4_yb3ubl.png",
            txt: "PERFECTLY BALANCED 7.7 PH",
        },
    ];

    const QualityControls = [
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828445/image_5_vuuhlq.png",
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828444/image_10_bprwwp.png",
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828443/image_6_myexxb.png",
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828442/image_11_ty6lje.png",
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828306/image_11_iikte5.png",
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828294/image_6_pbaebd.png",
        "https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828288/image_10_xqkp7n.png",
    ];

    return (
        <>
            <Helmet>
                <title>Shop | Eden Aqua</title>
                <meta name="description" content="Shop Earth's finest water. Discover premium hydration with Eden Aqua's eco-friendly, naturally sourced water." />
            </Helmet>

            <main className="flex flex-col gap-10">
                <ShopHero />
                <FourGroup data={data} />

                {/* About Section */}
                <section
                    className="h-80 sm:h-[32rem] flex items-center justify-center px-4 sm:px-8 lg:px-20 text-white text-center"
                    style={{
                        background: "url('https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828128/image_26_lf0pbt.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="max-w-xl flex flex-col items-center gap-4 animate-fadeIn">
                        <span className="font-semibold text-sm sm:text-base uppercase tracking-widest">
                            ABOUT US
                        </span>
                        <h2 className="font-bold text-3xl sm:text-5xl leading-tight">
                            Earth’s Finest Water
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Discover the journey from untouched mountain springs to crystal-clear hydration in every bottle. It’s not just water — it’s Eden Aqua.
                        </p>
                        <button className="px-6 py-2 bg-[var(--fourth-color)] rounded-sm font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                            View More
                        </button>
                    </div>
                </section>

                <ProductSliderShop />

                {/* Quality Control Section */}
                <section className="px-4 py-10 bg-gray-50    dark:bg-gray-900 text-center">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[var(--primary-color)] mb-8">
                        Quality Control Standards
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 justify-center">
                        {QualityControls.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-all duration-300"
                            >
                                <img
                                    loading="lazy"
                                    src={item}
                                    alt={`quality-logo-${index}`}
                                    className="max-h-24 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Recycle Info Section */}
                <section
                    className="flex flex-col md:flex-row  justify-between gap-2 bg-gradient-to-r from-[#E0F7FA] to-white"
                >
                    {/* Bottle Image */}

                    <img
                        loading="lazy"
                        src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828326/image_30_1_crefvr.png"
                        alt="Bottle"
                        className="h-[100vh] hidden md:block"
                    />


                    {/* Recycle Info */}
                    <div className="flex flex-col px-3 py-4 text-black w-full">
                        <img
                            loading="lazy"
                            src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750841688/Group_2085663304_awpckc.png"
                            alt="Eden Aqua Logo"
                            className="mb-4 w-32 md:w-42"
                        />
                        <h3 className="font-bold text-4xl md:text-6xl mb-4 leading-snug">
                            Give Your Bottle a Second Life
                        </h3>
                        <p className="text-lg text-gray-700 mb-4">
                            Every Eden Aqua bottle is 100% recyclable. When you recycle, you help:
                        </p>
                        <ol className="list-decimal list-inside text-base text-gray-800 space-y-1 mb-6">
                            <li>Reduce ocean plastic and landfill waste</li>
                            <li>Save energy and raw materials</li>
                            <li>Support a closed-loop production cycle</li>
                        </ol>
                        <img
                            loading="lazy"
                            src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828332/image_31_mjdwjs.png"
                            alt="Recycling Bag"
                            className="w-48 md:w-64"
                        />
                    </div>
                </section>

                {/* SubsCribe and Save */}

                <section
                    className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen px-6 py-10 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828437/image_14_smqwrq.png')",
                    }}
                >
                    {/* Bottle Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://res.cloudinary.com/dt4ohfuwc/image/upload/v1750828438/image_29_1_m084hg.png"
                            alt="Water Bottles"
                            className="h-[40vh] object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Subscription Steps */}
                    <div className="flex flex-col gap-6 text-white ">
                        <h1 className="font-extrabold text-3xl md:text-5xl tracking-wide uppercase leading-snug">
                            Subscribe and Save
                        </h1>

                        {[
                            { step: "1", label: "Select the bottle size" },
                            { step: "2", label: "Select your frequency" },
                            { step: "3", label: "Get free delivery" },
                        ].map(({ step, label }) => (
                            <div key={step} className="flex flex-col items-start gap-4">
                                <span className="px-4 py-2 text-lg font-bold rounded-md border border-white text-white  backdrop-blur-sm">
                                    {step}
                                </span>
                                <span className="text-base md:text-2xl font-bold uppercase tracking-wide">{label}</span>
                            </div>
                        ))}
                        <button className="bg-white cursor-pointer tracking-wider rounded-md text-[var(--primary-color)] px-3 py-1 font-medium w-[30%]">SUBSCRIBE NOW</button>
                    </div>
                </section>

            </main>
        </>
    );
}
