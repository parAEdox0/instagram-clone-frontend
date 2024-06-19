import { Link } from "react-router-dom";

const Header = ({ title, link }) => {
  return (
    <div className="header">
      <div className="h-[8.2vh] w-[100vw] relative flex justify-center items-center">
        <p className="absolute top-[2vh] left-4">
          <Link to={`/${link}`} className="text-blue-500">
            <i className="fa-solid fa-arrow-left text-lg"></i>
          </Link>
        </p>
        <h1 className="text-center text-[13px]">{title}</h1>
      </div>
    </div>
  );
};
export default Header;
