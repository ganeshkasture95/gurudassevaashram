import { FaCreditCard, FaDonate, FaHandHoldingHeart, FaMoneyBillWave, FaUsers } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

export default function DonateUs() {
    return (
        <div className="py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    Donate to Gurudas Seva Ashram
                </h1>
                <p className="text-lg mb-12 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                    Your Contribution, Our Strength. Join hands with us to uplift lives and foster hope.
                </p>

                <h2 className="text-3xl font-semibold mb-6 animate__animated animate__fadeIn animate__delay-3s">Why Donate?</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-4s">
                    Your donation helps us support education, empower women, care for the elderly, and create social harmony.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <FaUsers className="text-4xl text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3">Support Children’s Education</h3>
                        <p>
                            Provide shelter, education, and holistic development for marginalized children.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <FaHandHoldingHeart className="text-4xl text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3">Care for the Elderly</h3>
                        <p>
                            Support elderly residents with dignity and care at our old age home.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <FaUsers className="text-4xl text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3">Empower Women</h3>
                        <p>
                            Empower women through skill development and self-reliance programs.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <FaDonate className="text-4xl text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3">Promote Social Awareness</h3>
                        <p>
                            Conduct social awareness campaigns for a cleaner, greener, and more inclusive community.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105">
                        <FaCreditCard className="text-4xl text-indigo-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-3">Preserve Spiritual Teachings</h3>
                        <p>
                            Spread the teachings of Rashtrasant Tukdoji Maharaj through cultural events and initiatives.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6">Ways to Donate</h2>
                <div className="space-y-6 mb-12">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start transition duration-300 transform hover:scale-105 hover:shadow-xl">
                        <FaCreditCard className="text-3xl text-indigo-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold mb-3">1. Online Donation</h3>
                            <p>
                                Make a secure online donation through our payment gateway link.
                                <br />
                                <strong>Payment Gateway Link</strong>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start transition duration-300 transform hover:scale-105 hover:shadow-xl">
                        <FaMoneyBillWave className="text-3xl text-indigo-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold mb-3">2. Bank Transfer</h3>
                            <p>
                                Transfer your contribution to our bank account:
                                <br />
                                <strong>Account Name:</strong> Gurudas Seva Ashram
                                <br />
                                <strong>Bank Name:</strong> [Bank Name]
                                <br />
                                <strong>Account Number:</strong> [Account Number]
                                <br />
                                <strong>IFSC Code:</strong> [IFSC Code]
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start transition duration-300 transform hover:scale-105 hover:shadow-xl">
                        <FaHandHoldingHeart className="text-3xl text-indigo-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold mb-3">3. In-Person Donation</h3>
                            <p>
                                Visit us at our ashram to make a donation and see the impact of your generosity firsthand.
                                <br />
                                <strong>Address:</strong> Gurudas Seva Ashram, Gurudas Nagar, Ghatnandur, Tal. Ambajogai, Dist. Beed - 431519
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start transition duration-300 transform hover:scale-105 hover:shadow-xl">
                        <FaUsers className="text-3xl text-indigo-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold mb-3">4. Donate Materials or Services</h3>
                            <p>
                                We welcome donations in the form of:
                                <ul className="list-disc pl-6">
                                    <li>Books and educational materials for students</li>
                                    <li>Food supplies for residents and visitors</li>
                                    <li>Clothes, blankets, and other essentials for the elderly</li>
                                    <li>Medical equipment or health checkup services</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6">Tax Benefits</h2>
                <p className="text-lg mb-12">
                    All donations to Gurudas Seva Ashram are eligible for tax exemption under [Section Name, e.g., 80G of the Income Tax Act].
                </p>

                <h2 className="text-3xl font-semibold mb-6">How Your Donation is Used</h2>
                <div className="space-y-6 mb-12">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start transition duration-300 transform hover:scale-105 hover:shadow-xl">
                        <FiCheckCircle className="text-3xl text-indigo-600 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Transparency and Accountability</h3>
                            <p>
                                We ensure transparency and accountability for every donation received. Here’s how your contributions are utilized:
                                <ul className="list-disc pl-6">
                                    <li>60% for welfare programs and initiatives</li>
                                    <li>30% for infrastructure and maintenance</li>
                                    <li>10% for administrative expenses</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
                <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
                    <p className="text-lg italic mb-4">"Your support has transformed lives and brought hope to our community."</p>
                    <p className="text-gray-700">– A Resident Beneficiary</p>
                </div>

                <div className="mt-12">
                    <a href="#donate" className="bg-indigo-600 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700">
                        Donate Now
                    </a>
                </div>
            </div>
        </div>
    );
}
