import { Link } from "react-router-dom";
import { AddBookmarkButton } from "./Buttons";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full lg:px-28 xl:px-32 2xl:px-36 md:px-24 mt-3 mx-auto  py-2 items-center justify-between flex-col gap-3.5 md:flex-row md:gap-0   fixed top-0 z-20">
        <Logo />
        <div>
          <Link to={"/addBookmark"}>
            <AddBookmarkButton />
          </Link>
        </div>
      </div>
      <hr className="w-full  fixed z-20 mt-[9rem] md:mt-20 opacity-15" />
    </>
  );
};

export default Navbar;
