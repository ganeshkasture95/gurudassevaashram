import { FaCalendarCheck, FaHandsHelping, FaHeartbeat, FaPeopleArrows } from "react-icons/fa";

export default function AshramInfo() {
    return (
        <div className="bg-gray-50 py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side: Ashram Events Information */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Upcoming Events & Activities</h2>
                    <div className="space-y-6">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
                            <FaHeartbeat className="text-purple-600 text-3xl mt-1" />
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Annual Health Camp</h3>
                                <p className="text-gray-800 mt-2">
                                    Join us for our annual health camp providing free medical check-ups and consultations to the
                                    community.
                                    <span className="block font-semibold text-black mt-2">Date: 15th January 2025</span>
                                    <span className="block font-semibold text-black">Venue: Gurudasa Seva Ashram Grounds</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
                            <FaHandsHelping className="text-purple-600 text-3xl mt-1" />
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Spiritual Retreat</h3>
                                <p className="text-gray-800 mt-2">
                                    A 3-day retreat focusing on meditation and the teachings of Gurudev Maharaj to foster inner peace
                                    and community bonding.
                                    <span className="block font-semibold text-black mt-2">Date: 25th February 2025</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
                            <FaPeopleArrows className="text-purple-600 text-3xl mt-1" />
                            <div>
                                <h3 className="text-2xl font-semibold text-black">Volunteer Day</h3>
                                <p className="text-gray-800 mt-2">
                                    Participate in ashram activities and lend a helping hand to our residents. A great way to give back
                                    to the community!
                                    <span className="block font-semibold text-black mt-2">Date: 10th March 2025</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Bento Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-100 rounded-lg shadow-lg flex items-center justify-center p-6 text-center">
                        <div>
                            <h3 className="text-xl font-bold text-purple-800 flex items-center justify-center">
                                <FaCalendarCheck className="mr-2" /> 35+ Years
                            </h3>
                            <p className="text-gray-800">Serving the community with compassion and care.</p>
                        </div>
                    </div>
                    <div className="bg-blue-100 rounded-lg shadow-lg flex items-center justify-center p-6 text-center">
                        <div>
                            <h3 className="text-xl font-bold text-blue-800 flex items-center justify-center">
                                <FaHeartbeat className="mr-2" /> 500+ Lives
                            </h3>
                            <p className="text-gray-800">Transformed through education and empowerment.</p>
                        </div>
                    </div>
                    <div className="bg-green-100 rounded-lg shadow-lg flex items-center justify-center p-6 text-center">
                        <div>
                            <h3 className="text-xl font-bold text-green-800 flex items-center justify-center">
                                <FaHandsHelping className="mr-2" /> 10+ Initiatives
                            </h3>
                            <p className="text-gray-800">Focused on social welfare and awareness.</p>
                        </div>
                    </div>
                    <div className="bg-red-100 rounded-lg shadow-lg flex items-center justify-center p-6 text-center">
                        <div>
                            <h3 className="text-xl font-bold text-red-800 flex items-center justify-center">
                                <FaPeopleArrows className="mr-2" /> 150+ Volunteers
                            </h3>
                            <p className="text-gray-800">Contributing their time and skills to the cause.</p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
