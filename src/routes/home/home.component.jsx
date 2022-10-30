import DirectoryComponent from "../../Component/Directory/directory-component";
import "../../Component/Directory/directory-styles.scss";
import { Outlet } from "react-router-dom";
import SHOP_DATA from "../../shop.data";
const Home = () => {
  return (
    <div>
      {/* outlet hien thi route con khi bi de trong route cha */}
      <Outlet />
      <DirectoryComponent categories={SHOP_DATA} />
    </div>
  );
};

export default Home;
