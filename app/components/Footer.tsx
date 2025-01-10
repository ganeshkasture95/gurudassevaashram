import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ter-200 text-gray-200 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section (on large screens) */}
        <div className="hidden lg:block">
          <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm text-gray-400">
            Gurudev Seva Ashram has been serving the community for over 35 years,
            providing shelter, care, and support to those in need.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/donate" className="hover:underline text-gray-400">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links (on large screens) */}
        <div className="hidden lg:block">
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} Gurudev Seva Ashram. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 justify-center md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 text-gray-400"
          >
            F
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-gray-400"
          >
            T
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-gray-400"
          >
            I
          </a>
        </div>
      </div>
    </footer>
  );
}
