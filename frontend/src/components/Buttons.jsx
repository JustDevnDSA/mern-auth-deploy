/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AddBookmarkButton = () => {
  return (
    <button className="bg-yellow-800 bg-opacity-50 text-lg  text-yellow-300 font-medium px-5 py-2 rounded-md hover:bg-opacity-60 flex items-center gap-2">
      <i className="fa-solid fa-plus text-sm  rounded-full "></i>
      Add Bookmark
    </button>
  );
};

const DeleteBookmarkButton = ({ deleteFunction }) => {
  return (
    <button
      onClick={deleteFunction}
      className="bg-red-800 bg-opacity-50   text-red-300 font-medium px-4 py-1 rounded-md hover:bg-opacity-60 "
    >
      Delete
    </button>
  );
};

const EditBookmarkButton = ({_id}) => {
  return (
    <Link to={`/editBookmark/${_id}`}>
      <button className="bg-blue-800 bg-opacity-50   text-blue-300 font-medium px-4 py-1 rounded-md hover:bg-opacity-60 ">
        Edit
      </button>
    </Link>
  );
};

const EditAndSaveBookmarkButton = () => {
  return (
    
      <button type="submit" className="bg-blue-800 bg-opacity-50   text-blue-300 font-medium px-5 py-2 rounded-md hover:bg-opacity-60 ">
        Edit &amp; Save
      </button>
    
  );
};

const VisitButton = ({ link }) => {
  return (
    <Link to={link} target="_blank">
      <button className="bg-lime-800 bg-opacity-50   text-lime-300 font-medium px-4 py-1 rounded-md hover:bg-opacity-60 ">
        Visit
      </button>
    </Link>
  );
};

const SaveBookmarkButton = () => {
  return (
    <h1 className="bg-green-800 bg-opacity-50   text-green-300 font-medium px-5 py-2 rounded-md hover:bg-opacity-60 ">
      Save
    </h1>
  );
};

const CategoryButton = ({ category }) => {
  return (
    <button className="bg-violet-800 bg-opacity-50  text-violet-300 font-medium px-4  py-1 rounded-md cursor-default ">
      {category}
    </button>
  );
};

export {
  AddBookmarkButton,
  DeleteBookmarkButton,
  EditBookmarkButton,
  SaveBookmarkButton,
  CategoryButton,
  VisitButton,
  EditAndSaveBookmarkButton,
};
