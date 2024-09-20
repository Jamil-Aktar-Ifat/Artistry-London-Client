import Marquee from "react-fast-marquee";

const slides = [
  {
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Dan Mall",
    title: "Creative Director",
    tags: ["Illustration", "Mobile", "UI"],
  },
  {
    img: "https://images.pexels.com/photos/2761340/pexels-photo-2761340.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jane Doe",
    title: "Lead Designer",
    tags: ["Graphic Design", "UX", "Branding"],
  },
  {
    img: "https://images.pexels.com/photos/23939346/pexels-photo-23939346/free-photo-of-a-man-in-a-suit-and-hat-smoking-a-cigarette.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Smith",
    title: "UI/UX Specialist",
    tags: ["UI", "UX", "Prototyping"],
  },
  {
    img: "https://images.pexels.com/photos/3848683/pexels-photo-3848683.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Alice Johnson",
    title: "Art Director",
    tags: ["Creative Direction", "Illustration", "Motion Graphics"],
  },
  {
    img: "https://images.pexels.com/photos/2105936/pexels-photo-2105936.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Bob Brown",
    title: "Senior Designer",
    tags: ["Typography", "Brand Identity", "Packaging"],
  },
  {
    img: "https://images.pexels.com/photos/11326347/pexels-photo-11326347.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Carol White",
    title: "Illustrator",
    tags: ["Illustration", "Character Design", "Storyboarding"],
  },
  {
    img: "https://videos.pexels.com/video-files/13801253/13801253-sd_360_640_24fps.mp4",
    name: "Dave Green",
    title: "Visual Designer",
    tags: ["Visual Design", "UI", "Interaction Design"],
  },
  {
    img: "https://images.pexels.com/photos/19378119/pexels-photo-19378119/free-photo-of-black-and-white-portrait-of-a-man.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "George Black",
    title: "Art Director",
    tags: ["Visual Design", "Branding"],
  },
  {
    img: "https://videos.pexels.com/video-files/9364050/9364050-sd_640_360_25fps.mp4",
    name: "Emily White",
    title: "UI Designer",
    tags: ["UI", "UX", "Design"],
  },
];

const MarqueeC = () => {
  return (
    <div className="overflow-hidden">
      <Marquee pauseOnHover={true} speed={150}>
        {slides.map((slide, index) => (
          <div key={index} className="relative md:flex items-center mx-4">
            
            <div className="md:w-72 h-96 overflow-hidden rounded-xl relative">
              {slide.img.endsWith(".mp4") ? (
                <video
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                >
                  <source src={slide.img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className="object-cover w-full h-full"
                  src={slide.img}
                  alt={slide.name}
                />
              )}
            </div>

            
            <div className="absolute bottom-0 md:w-full flex flex-col items-center text-white p-2 bg-black bg-opacity-50 rounded-lg">
              <p className="text-lg font-semibold shadow-md">{slide.name}</p>
              <p className="text-sm shadow-md">{slide.title}</p>
              <div className="flex items-center gap-2 mt-2">
                {slide.tags.map((tag, idx) => (
                  <button
                    key={idx}
                    className="p-2 border rounded-xl text-xs hover:bg-white hover:text-black transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeC;
