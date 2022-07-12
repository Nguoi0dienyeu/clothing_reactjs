import DirectoryComponent from "./Directory/directory-component";
import "./Directory/directory-styles.scss";
const App = () => {
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
  return <DirectoryComponent categories={categories} />;
};

export default App;
