import Link from "next/link";


export default function DonateUs() {
    return (
        <div className="py-12 px-6 md:px-16">
            <div className="max-w-7xl mx-auto text-center text-white">
                {/* Other sections of your page */}

                {/* Tukdoji Maharaj's Thought Section */}
                <div className="bg-ter-200 text-white p-8 rounded-lg mb-12">
                    <h2 className="text-3xl font-semibold mb-4">Thoughts of Rashtrasant Tukdoji Maharaj</h2>
                    <p className="text-lg italic mb-6">
                    `&quot;`A true devotee serves others selflessly. A true soul is one who works for the welfare of others.`&quot;`
                    </p>
                    <p className="text-lg italic">
                    `&quot;`Service to humanity is the most divine form of worship. Let your heart be filled with compassion and love for all.`&quot;`
                    </p>
                </div>

                <div className="mt-12">
                    <Link href="/donate" className="bg-ter-200 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700">
                        Donate Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
