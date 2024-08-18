import { Link } from "react-router-dom";
import { AddBookmarkButton } from "./Buttons";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full lg:px-28 xl:px-32 2xl:px-36 md:px-24 mt-3 mx-auto  py-2 items-center justify-between flex-col gap-3.5 md:flex-row md:gap-0   fixed top-0 z-20 bg-gray-950 border-b border-gray-700 border-opacity-80 pb-4 ">
        <Logo />
        <div>
          <Link to={"/addBookmark"}>
            <AddBookmarkButton />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
