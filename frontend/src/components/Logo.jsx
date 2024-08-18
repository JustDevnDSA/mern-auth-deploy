import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className="text-3xl font-bold flex items-center gap-1 text-gray-50">
        <img src="bookmark_logo.png" alt="logo" width={45} height={45} />
        Bookmarks
      </h1>
    </Link>
  );
};

export default Logo;
