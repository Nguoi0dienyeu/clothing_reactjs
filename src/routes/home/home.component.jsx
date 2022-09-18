import DirectoryComponent from "../../Component/Directory/directory-component";
import "../../Component/Directory/directory-styles.scss";
import { Outlet } from "react-router-dom";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      subtitle: "Shop Now",
      imgUrl:
        "https://media.gq.com/photos/61f1b40342209a2de49b86e0/master/pass/012622-winter-jackets-refresh-lead.jpg",
    },
    {
      id: 2,
      title: "Womens",
      subtitle: "Shop Now",
      imgUrl:
        "https://media.gq.com/photos/61f1b40342209a2de49b86e0/master/pass/012622-winter-jackets-refresh-lead.jpg",
    },
    {
      id: 3,
      title: "Mens",
      subtitle: "Shop Now",
      imgUrl:
        "https://media.gq.com/photos/61f1b40342209a2de49b86e0/master/pass/012622-winter-jackets-refresh-lead.jpg",
    },
    {
      id: 4,
      title: "Summer",
      subtitle: "Shop Now",
      imgUrl:
        "https://media.gq.com/photos/61f1b40342209a2de49b86e0/master/pass/012622-winter-jackets-refresh-lead.jpg",
    },
    {
      id: 5,
      title: "Jacket",
      subtitle: "Shop Now",
      imgUrl:
        "https://media.gq.com/photos/61f1b40342209a2de49b86e0/master/pass/012622-winter-jackets-refresh-lead.jpg",
    },
  ];

  return (
    <div>
      {/* outlet hien thi route con khi bi de trong route cha */}
      <Outlet />
      <DirectoryComponent categories={categories} />
    </div>
  );
};

export default Home;
