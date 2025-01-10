import Image from "next/image";

export default function History() {
    const milestones = [
        {
            year: "1985",
            title: "Establishment of Gurudas Seva Ashram",
            description: "Founded under the inspiration of Rashtrasant Tukdoji Maharaj, the ashram was established by P.P. Shri Gurudev Maharaj with a vision of spiritual and social transformation.",
            image: "/assets/ashram15.jpg",
        },
        {
            year: "1986",
            title: "Land Contribution & Afforestation",
            description: "A generous donation of 14 acres of land by Gurudev Maharaj laid the foundation of the ashram. The barren land was transformed into a lush, serene environment through relentless efforts.",
            image: "/assets/ashram15.jpg",
        },
        {
            year: "1990",
            title: "Hostel for Underprivileged Students",
            description: "A hostel was built to support students from marginalized communities, focusing on education, personality development, and self-reliance.",
            image: "/assets/ashram15.jpg",
        },
        {
            year: "2000",
            title: "Launch of Gurudas Old Age Home",
            description: "An old age home was established to provide care, comfort, and a family-like environment for the elderly.",
            image: "/assets/ashram15.jpg",
        },
        {
            year: "2010",
            title: "Women Empowerment Programs",
            description: "Vocational training and self-help groups were introduced to empower women and promote financial independence.",
            image: "/assets/ashram15.jpg",
        },
        {
            year: "2020",
            title: "Environmental Initiatives",
            description: "Tree plantation drives and cleanliness campaigns were launched to create a sustainable and eco-friendly environment.",
            image: "/assets/ashram15.jpg",
        },
    ];

    return (
        <div className="bg-gray-50 py-12 px-6 md:px-16">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold text-black mb-4">Our History</h1>
                <p className="text-gray-700 text-lg">
                    Discover the journey of Gurudas Seva Ashram, from its humble beginnings to becoming a beacon of hope and service for the community.
                </p>
            </div>

            {/* Beginning Section */}
            <section className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image src="/assets/ashram15.jpg" alt="Vision for Social Transformation" className="rounded-lg shadow-lg"  width={1000} height={1000}/>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-black mb-4">The Beginning: A Vision for Social Transformation</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Gurudas Seva Ashram was founded on August 1, 1985, under the inspiration of Rashtrasant Tukdoji Maharaj. P.P. Shri Gurudev Maharaj dedicated himself to social and spiritual welfare, transforming barren land into a lush haven for community development.
                    </p>
                </div>
            </section>

            {/* Founding Philosophy */}
            <section className="max-w-7xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-black mb-4">The Founding Philosophy</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Inspired by the teachings of Rashtrasant Tukdoji Maharaj, the ashram was built on the principles of:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-4">
                        <li>Holistic development of individuals</li>
                        <li>Community-driven initiatives</li>
                        <li>Promoting self-reliance and education</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        The ashram emphasizes the message of the "Gramgeeta," focusing on village empowerment, unity, and self-sufficiency.
                    </p>
                </div>
                <div>
                    <Image src="/assets/ashram15.jpg" alt="Founding Philosophy" className="rounded-lg shadow-lg" width={1000} height={1000} />
                </div>
            </section>

            {/* Timeline */}
            <section className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-black text-center mb-8">Journey of Service (1985 - Present)</h2>
                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 ${
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            <div className="w-full md:w-1/2">
                                <Image src={milestone.image} alt={milestone.title} className="rounded-lg shadow-lg"  width={1000} height={1000}/>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-black mb-2">{milestone.year}</h3>
                                <h4 className="text-xl font-bold text-gray-800 mb-4">{milestone.title}</h4>
                                <p className="text-gray-700">{milestone.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Legacy Section */}
            <section className="max-w-7xl mx-auto mt-16 text-center">
                <h2 className="text-3xl font-bold text-black mb-4">Legacy of Service</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Today, Gurudas Seva Ashram stands as a symbol of compassion, service, and dedication. It continues to inspire marginalized communities and individuals, echoing the timeless values of Rashtrasant Tukdoji Maharaj and the vision of its founder, P.P. Shri Gurudev Maharaj.
                </p>
                <div className="mt-8">
                    <Image src="/assets/ashram15.jpg" alt="Legacy of Service" className="rounded-lg shadow-lg mx-auto"  width={1000} height={1000}/>
                </div>
            </section>
        </div>
    );
}
