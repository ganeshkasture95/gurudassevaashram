"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            ease: "power2.out",
            borderRadius: "20px 20px 20px 20px",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
        });
    }, []);

    return (
        <div className="relative h-screen w-screen justify-center overflow-hidden bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100">
            {/* Hero Image */}
            <div
                ref={imageRef}
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            >
                <Image
                    src="/assets/ashram20.jpg"
                    alt="Gurudev Seva Ashram"
                    fill
                    className="object-cover object-center opacity-70"
                />
            </div>

            {/* Content Section */}
            <div className="absolute bottom-0 z-10  flex flex-col items-center  w-full rounded-t-2xl justify-center min-h-[35vh] backdrop-blur-md rounded-xl  md:mx-8 py-8 md:py-16 shadow-lg">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-white leading-tight mb-4 animate__animated animate__fadeIn">
                    Welcome to Gurudev Seva Ashram
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100 text-center animate__animated animate__fadeIn animate__delay-1s">
                    Inspiring Change, Empowering Lives
                </h2>
                <p className="mt-6 text-center text-sm md:text-lg text-gray-300 leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
                    A sanctuary of hope and service, where spirituality meets social welfare. Join us in creating a better, more compassionate world for those in need.
                </p>

                <div className="mt-8 flex space-x-4 animate__animated animate__fadeIn animate__delay-3s">
                    <a href="/donate">
                        <button className="px-8 py-4 bg-white  text-slate-700 hover:text-white hover:bg-ter-200 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                            Donate Now
                        </button>
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;
