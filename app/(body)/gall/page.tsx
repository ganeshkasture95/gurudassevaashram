import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      src: "/assets/ashram12.jpg",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
      title: "Founding of the Ashram",
      description: "A glimpse into the humble beginnings of Gurudasa Seva Ashram."
    },
    {
      src: "/assets/ashram13.jpg",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      title: "Community Involvement",
      description: "The local community plays a crucial role in supporting the ashram."
    },
    {
      src: "/assets/ashram13.jpg",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      title: "Helping the Needy",
      description: "Serving those in need with compassion and care."
    },
    {
      src: "/assets/ashram14.jpg",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      title: "Caring for Children",
      description: "Providing shelter and education to orphaned children."
    },
    {
      src: "/assets/ashram15.jpg",
      colSpan: "col-span-2",
      rowSpan: "row-span-2",
      title: "Spiritual Growth",
      description: "Fostering spiritual growth and personal development."
    },
    {
      src: "/assets/ashram16.jpg",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
      title: "Volunteering",
      description: "Many volunteers contribute their time to help the ashram."
    },
    {
      src: "/assets/ashram17.jpg",
      colSpan: "col-span-2",
      rowSpan: "row-span-1",
      title: "Food for All",
      description: "Providing nutritious meals to the less fortunate."
    }
  ];
  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <div className="max-w-[90vw] py-12 px-3 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">Gallery</h2>

        <div className="md:grid flex flex-col  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group ${image.colSpan} ${image.rowSpan} overflow-hidden rounded-lg shadow-lg`}
            >
              {/* Image Container */}
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover object-center w-full h-full transition-all duration-500 ease-in-out"
                  width={800}
                  height={600}
                />

                {/* Bottom Blur on Hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black opacity-0 group-hover:opacity-50 group-hover:blur-sm transition-all duration-300 h-1/3" />
              </div>

              {/* Title and Description */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-60">
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-sm mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
