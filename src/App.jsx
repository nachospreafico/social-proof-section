import "./App.css";
import Header from "./components/Header";
import Ratings from "./components/Ratings";
import Reviews from "./components/Reviews";
import { reviewsData } from "./components/reviewsData";

function App() {
  return (
    <>
      <div className="lg:grid grid-cols-2 px-6 lg:px-[165px] lg:mb-[70px] mb-12">
        <Header />
        <div className="flex flex-col gap-4 pt-20">
          <Ratings text={"Rated 5 Stars in Reviews"} position={"start"} />
          <Ratings text={"Rated 5 Stars in Report Guru"} position={"center"} />
          <Ratings text={"Rated 5 Stars in BestTech"} position={"end"} />
        </div>
      </div>
      <div className="flex flex-col gap-4 px-6 lg:grid lg:grid-cols-3 lg:h-[382px] lg:px-[165px] lg:mb-[50px]">
        {reviewsData.map((elem, index) => {
          return (
            <Reviews
              name={elem.name}
              img={elem.img}
              text={elem.text}
              key={index}
              position={elem.position}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
