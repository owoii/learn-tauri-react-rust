import { FiGithub, FiSettings, FiBook } from "react-icons/fi";

export default function NavBar({ iconSize = 26 }) {
  const hoverIcon = "transform hover:scale-110 duration-150 cursor-pointer";
  return (
    <div className="bg-dark-100 p-2 bg-opacity-10 rounded-lg flex justify-between ease-in-out">

      <div>
        <h1 className="text-1.5em">React + tauri + Rust Learn</h1>
        <p className="text-dark-50 text-xs mt-1">
          一个可能会做一堆东西的项目,因为想到啥就往这里丢了
        </p>
      </div>
      
      <div className="flex h-100% justify-center items-center gap-3">
        <a
          href="https://github.com/owocc"
          target="_blank"
          className="h-full flex justify-center items-center"
        >
          <FiGithub size={iconSize} className={hoverIcon} />
        </a>
        <FiBook size={iconSize} className={hoverIcon} />
        <FiSettings size={iconSize} className={hoverIcon} />
      </div>
    </div>
  );
}
