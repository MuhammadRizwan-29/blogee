import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="cursor-pointer w-32 sm:w-44"
      />
      <button
        onClick={() => navigate("/admin")}
        className="cursor-pointer flex items-center gap-2 rounded-full text-sm bg-primary text-white px-10 py-2.5"
      >
        Login <img src={assets.arrow} alt="Arrow icon" className="w-3" />
      </button>
    </header>
  );
}
