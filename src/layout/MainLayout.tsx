import HomeNavCard from "@/component/HomeNavCard/HomeNavCard";
import NavBar from "./NavBar";
export default function MainLayout() {
  return (
    <div>
      {/*顶部栏*/}
      <NavBar />
      {/*首页选项卡片*/}
      <HomeNavCard />
    </div>
  );
}
