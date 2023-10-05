import { FiChevronLeft, FiHome } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
// TODO 实现面包屑,使用 useLocation 实现

// 导航栏
export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  let icon;
  if (location.pathname == "/learn-react/nav") {
    icon = <FiHome size={24} />;
  } else {
    icon = <FiChevronLeft size={24} />;
  }
  function back() {
    if (location.pathname == "/learn-react/nav") {
      navigate("/");
    } else {
      navigate(-1);
    }
  }
  return (
    <div className="flex gap-2 items-center mb-5 bg-dark-50 bg-opacity-10 p-2 rounded-md">
      <button
        onClick={back}
        className="bg-light-50 bg-opacity-30 p-1 aspect-square rounded-md flex justify-center items-center  shadow-md  hover:scale-105 transform duration-200 ease-in-out :hover:shadow-lg"
      >
        {icon}
      </button>
      <h1 className="text-lg">LearnReact</h1>
    </div>
  );
}
