import { FiPercent } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();
  function backToHome() {
    navigate("/");
  }
  return (
    <div>
      <div className="flex items-center gap-2">
        <div
          onClick={backToHome}
          className="border cursor-pointer border-light-900 shadow-md p-1 bg-light-100 bg-opacity-10  flex items-center rounded-lg
         hover:scale-105 hover:shadow-lg transform duration-200 hover:bg-dark-900 hover:text-light-900
        "
        >
          <FiPercent size={28} />
        </div>
        <div>
          <h1 className="text-lg font-medium">算法练习</h1>
          <p className=" text-gray-500 text-sm">
            一天一个小算法,进步你我他...
            <span className=" text-transparent">然鹅数据结构还没学完</span>
          </p>
        </div>
      </div>
    </div>
  );
}
