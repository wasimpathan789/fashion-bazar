import "./PageBanner.css";
import { Link } from "react-router-dom";

const PageBanner = ({ title, path }) => {
  const bannerStyle = {
    backgroundColor: "#f9f9f9",
    padding: "30px 80px",
    height: "150px",
    "@media (maxWidth: 1024px)": {
      padding: "30px 10px",
      backgroundColor: "red",
    },
  };
  return (
    <div style={bannerStyle} className="banner ">
      <div>
        <span>
          <Link to={"/"}>Home / </Link>
        </span>
        <span>
          <Link to={`/${path}`}>{title}</Link>
        </span>
      </div>
      <div>
        <h1 className="text-center capitalize"> {title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
