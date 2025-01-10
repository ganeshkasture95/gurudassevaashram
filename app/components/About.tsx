"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            scale: 2,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.out",
            scrollTrigger: {
                trigger: imageRef.current,
                start: "bottom",
                end: "end end",
                scrub: true,
            },
        });
    }, []);

    return (
        <div className="bg-gradient-to-b overflow-hidden from-gray-100 to-gray-200 py-12 px-6 md:px-16">
            <h2 className="justify-center justify-self-center text-3xl md:text-4xl font-bold text-black mb-4">
                About Ashram's
            </h2>

            <div className="max-w-7xl mx-auto space-y-16">
                {/* Section 1: Story of the Ashram's Founding */}
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <Image
                        src="/assets/ashram16.jpg"
                        alt="Ashram Founding"
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-lg object-cover"
                        width={1000}
                        height={1000}
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Story of the Ashram's Founding
                        </h2>
                        <p className="text-gray-900 text-lg leading-relaxed">
                            Founded in{" "}
                            <span className="font-semibold text-gray-700">
                                1985
                            </span>{" "}
                            by the revered{" "}
                            <span className="font-semibold text-gray-700">
                                Gurudev Maharaj
                            </span>
                            , Gurudasa Seva Ashram is a sanctuary for the
                            destitute and marginalized. Inspired by the
                            teachings of{" "}
                            <span className="font-semibold text-gray-700">
                                Sant Tukdoji Maharaj
                            </span>
                            , it was established to provide shelter and support
                            to the needy.
                        </p>
                    </div>
                </div>

                {/* Section 2: History of Gurudev Maharaj */}
                <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-8">
                    <Image
                        src="/assets/ashram13.jpg"
                        alt="Gurudev Maharaj"
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-lg object-cover"
                        width={1000}
                        height={1000}
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            History of Gurudev Maharaj
                        </h2>
                        <p className="text-gray-900 text-lg leading-relaxed">
                            Gurudev Maharaj, a disciple of{" "}
                            <span className="font-semibold text-gray-700">
                                Sant Tukdoji Maharaj
                            </span>
                            , dedicated his life to serving humanity and
                            uplifting the underprivileged. His teachings
                            emphasized kindness, compassion, and social
                            justice, leaving behind a legacy of selflessness
                            and community service.
                        </p>
                    </div>
                </div>

                {/* Section 3: Mission of Gurudasa Seva Ashram */}
                <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
                    <Image
                        src="/assets/ashram14.jpg"
                        alt="Ashram Mission"
                        className="w-full h-96 md:w-1/2 rounded-lg shadow-lg object-cover"
                        width={1000}
                        height={1000}
                    />
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Mission of Gurudasa Seva Ashram
                        </h2>
                        <p className="text-gray-900 text-lg leading-relaxed">
                            The ashram’s mission includes providing a safe haven
                            for the homeless, elderly, and children. By
                            offering{" "}
                            <span className="font-semibold text-gray-700">
                                food
                            </span>
                            ,{" "}
                            <span className="font-semibold text-gray-700">
                                education
                            </span>
                            , and{" "}
                            <span className="font-semibold text-gray-700">
                                vocational training
                            </span>
                            , the ashram empowers individuals to lead dignified
                            lives while fostering community awareness and
                            involvement.
                        </p>
                    </div>
                </div>

                {/* Section with Animated Image */}
                <div className="flex size-full justify-center" ref={imageRef}>
                    <div
                        className="w-full md:w-1/2 h-96 rounded-lg shadow-lg object-cover"
                        style={{
                            backgroundImage: "url('/assets/ashram14.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                </div>
            </div>

            {/* Learn More Button */}
            <div className="mt-12 text-center">
                <Link href="/about">
                    <p className="bg-ter-200 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-ter-50 transition duration-300">
                        Learn More
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default About;
