
import Banner from "../../components/Banner/Banner";
import CraftItems from "../../components/CraftItems/CraftItems";
import MarqueeC from "../../components/Marquee/MarqueeC";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Banner />
      <MarqueeC />
      <CraftItems />
    </div>
  );
};

export default Home;
