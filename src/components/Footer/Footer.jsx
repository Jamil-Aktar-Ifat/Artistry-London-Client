import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { GrPinterest } from "react-icons/gr";

const Footer = () => {
  return (
    <div className=" py-10 bg-slate-100 m-0">
      <div className="max-w-6xl mx-auto space-y-20">
        <div className="flex  flex-col md:flex-row items-center justify-around space-y-5 md:space-y-0">
          <h2 className="text-2xl font-semibold ">Artistry London</h2>
          <div className="flex flex-col md:flex-row items-center gap-3 font-semibold">
            <h2>For designers</h2>
            <h2>Hire Talent</h2>
            <h2>Inspiration</h2>
            <h2>Blogs</h2>
            <h2>About</h2>
            <h2>Careers</h2>
          </div>
          <div className="flex  items-center gap-2">
            <AiFillTwitterSquare className="w-8 h-8"></AiFillTwitterSquare>
            <AiFillFacebook className="w-8 h-8"></AiFillFacebook>
            <AiOutlineInstagram className="w-8 h-8"></AiOutlineInstagram>
            <GrPinterest className="w-8 h-8"></GrPinterest>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row pl-4 md:pl-0">
          <div className="flex items-center gap-3">
            <div>{"\u00A9"} 2024 Artistry London</div>
            <p>Terms </p>
            <p>Policy</p>
            <p>Cookies</p>
          </div>
          <div className="flex items-center gap-3">
            <p>Jobs</p>
            <p>Designers</p>
            <p>Freelancers</p>
            <p>Tags</p>
            <p>Resources</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
