import Image from "next/image";
import {
    FaBed,
    FaBookOpen,
    FaHandHoldingHeart,
    FaHeart,
    FaMusic,
    FaSeedling
} from "react-icons/fa";

export default function Services() {
    const services = [
        {
            icon: <FaBed className="text-red-500 text-4xl" />,
            title: "Sarumata Backward Class Boys Hostel",
            description: "Health camps, yoga programs, and personality development workshops. Supporting students in achieving their goals across various fields.",
            image: "/assets/ashram15.jpg",
        },
        {
            icon: <FaHeart className="text-blue-500 text-4xl" />,
            title: "Gurudas Old Age Home",
            description: "Creating a family-like environment for the elderly and promoting family values to reduce the need for such homes.",
            image: "/assets/ashram15.jpg",
        },
        {
            icon: <FaHandHoldingHeart className="text-green-500 text-4xl" />,
            title: "Women Empowerment & Self-Help Groups",
            description: "Skill training in tailoring, handicrafts, and small-scale industries. Promoting financial independence through micro-business initiatives.",
            image: "/assets/ashram15.jpg",
        },
        {
            icon: <FaMusic className="text-purple-500 text-4xl" />,
            title: "Gurudas Music School",
            description: "Cultivating musical talent and passion in students with an aptitude for music.",
            image: "/assets/ashram15.jpg",
        },
        {
            icon: <FaSeedling className="text-teal-500 text-4xl" />,
            title: "Social Awareness Programs",
            description: "Campaigns against untouchability, dowry, and addictions. Promoting cleanliness, afforestation, and communal harmony through cultural initiatives.",
            image: "/assets/ashram15.jpg",
        },
        {
            icon: <FaBookOpen className="text-orange-500 text-4xl" />,
            title: "Gramgeeta Granth Week",
            description: "Celebrating Rashtrasant Tukdoji Maharaj's teachings through book readings, cultural events, and competitions.",
            image: "/assets/ashram15.jpg",
        },
    ];

    return (
        <div className="bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-black mb-6">Our Services</h1>
                <p className="text-gray-700 text-lg mb-12">
                    Discover the diverse initiatives of Gurudas Seva Ashram, aimed at uplifting the community and promoting self-reliance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative h-48">
                                <Image 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-cover"
                                    width={1000}
                                    height={500}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-semibold text-black mb-2">{service.title}</h3>
                                <p className="text-gray-700">{service.description}</p>
                                {/* <button className="mt-4 bg-[#1B262C] text-white px-4 py-2 rounded-lg hover:bg-[#0F4C75] transition-colors">
                                    Learn More
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
