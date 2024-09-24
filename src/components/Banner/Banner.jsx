import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="">
      <div className="hero my-10">
        <div className="hero-content text-center">
          <div className="w-2/3 space-y-10">
            {/* Typewriter Component with Previous Class Names */}
            <p className="bg-[#fcde66] rounded-full py-2">
              <Typewriter
                words={["Discover, Learn, and Create Art Like Never Before"]}
                loop={1} // Set to true if you want it to loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
            <h1 className="text-5xl">Unleash Your Inner Artist</h1>
            <p className="">
              Explore a world of creativity with our wide range of painting and
              drawing techniques. Whether you're into landscape paintings,
              portrait sketches, or abstract art, we have everything you need to
              bring your vision to life.
            </p>
            <button className="btn bg-black text-white rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
