import Footer from "../../components/footer/Footer";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import Realestate from "../../components/realstate/Realestate";
import { listData } from "../../lib/dummydata";

function HomePage() {
  const data = listData;
  return (
    <div className="container">
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p className="note">
              ወደ Infinity እንኳን በደህና መጡ፣ <br /> ህልምዎን ቤት ማግኘት ተልእኳችን ነው. ሰፊ
              ዝርዝሮቻችንን ያስሱ እና ለፍላጎትዎ ከተሰጡ ባለሙያ ወኪሎች ጋር ይገናኙ. ዛሬ ጉዞዎን ይጀምሩ እና
              ህልሞች እውን የሚሆኑበትን ቦታ ያግኙ.
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>አመታት ልምድ</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>ሽልማት አግኝተናል</h2>
              </div>
              <div className="box">
                <h1>2000+</h1>
                <h2>ንብረቶች አስተላልፈናል</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imgContainer">
          <img src="/desktop.jpg" alt="" />
        </div>
      </div>
      <br />
      <div className="bottom">
        <div className="titles">Popular Featured Homes</div>
        <div className="compos">
          {data &&
            data.map((home, index) => (
              <Realestate
                key={index}
                title={home.address}
                location="Addis Ababa"
                details={home.title}
                img={home.img}
              />
            ))}
          {/* <Realestate
            title="Real Estate 1"
            location="Addis Ababa"
            details="This is a detail note to be featched"
          />
          <Realestate
            title="Real Estate 1"
            location="Addis Ababa"
            details="This is a detail note to be featched"
          />
          <Realestate
            title="Real Estate 2"
            location="Addis Ababa"
            details="This is a detail note to be featched"
          />
          <Realestate
            title="Real Estate 3"
            location="Addis Ababa"
            details="This is a detail note to be featched"
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
