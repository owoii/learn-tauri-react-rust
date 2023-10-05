import { FiCheck, FiX, FiGithub, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

// 顶部带颜色的指示栏
/**
 *
 * @param master 是否完成
 * @param size 导航条大小
 * @returns
 */
function NavCardStatusBar({ master }: { master?: boolean }) {
  // 是否完成指示
  let isMaster = <FiX />;
  if (master) {
    isMaster = <FiCheck />;
  }
  return (
    <div className="w-full relative top-1 h-8 rounded-md rounded-b-none bg-dark-900 z-99 shadow-md  flex box-border p-1.5  gap-1 justify-between">
      <div className="text-light-900 flex justify-center items-center absolute left-1.5 top-0 bottom-0 m-auto">
        {isMaster}
      </div>
      {/* 状态指示 */}
      <div className="w-full h-full rounded-sm  transform  ease-in-out duration-150 hover:translate-x-5 bg-green-500"></div>
      <div className="text-light-500 flex justify-center items-center cursor-pointer">
        <FiGithub />
      </div>
    </div>
  );
}

function NavCard({
  title = "暂无标题",
  desc = "暂无描述",
  to = "/",
  master,
}: Athena.CardData) {
  return (
    <div className="relative hover:scale-105 transform duration-250 ">
      <NavCardStatusBar master={master} />
      <div className="relative border-t-0 flex h-full justify-between flex-col rounded-t-none bg-light-100 bg-opacity-40 rounded-md p-2 box-border border  border-dark-50 ">
        <div>
          <h1 className="text-lg font-medium break-all">{title}</h1>
          <p className="mb-4 break-all">{desc}</p>
        </div>
        <div className="flex flex-row-reverse items-center gap-1">
          <Link
            to={to}
            className=" flex justify-center items-center gap-1 border border-dark-50 px-5 rounded-full hover:bg-dark-900 hover:text-light-900 duration-150 ease-in-out"
          >
            <FiLogOut />
            进入
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 *
 * @param list 需要渲染的导航数据
 * @returns
 */
export default function StatusCardList({
  list = [],
}: {
  list: Athena.CardData[];
}) {
  const navList = list.map((e) => <NavCard key={e.id} {...e} />);
  return (
    <div className="grid md:grid-cols-3 gap-3 xl:grid-cols-5 2xl:grid-cols-6">
      {navList}
    </div>
  );
}
