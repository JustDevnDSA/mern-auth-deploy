/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import {
  CategoryButton,
  DeleteBookmarkButton,
  EditBookmarkButton,
  VisitButton,
} from "./Buttons";
import { useEffect, useState } from "react";
import { handleError, handleSuccess } from "./ToastMessages";

const ShowBookmarkItem = ({ category, title, link, _id, fetchBookmarks }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(
        `${backendUrl}/deleteBookmark/${_id}`
      );
      setIsDeleted(true);
      handleSuccess(response.data.message);
    } catch (error) {
      handleError("Error deleting bookmark");
    }
  };

  useEffect(() => {
    if (isDeleted) {
      fetchBookmarks();
    }
  }, [isDeleted, fetchBookmarks]);

  return (
    <div className="flex items-center justify-between gap-4 px-16 rounded-md py-4 bg-slate-800 w-[60rem]  bg-opacity-10 border-gray-700 border border-opacity-25 ">
      <div>
        <CategoryButton category={category} />
      </div>

      <p className="text-center px-2 break-words overflow-hidden w-[45%]">{title}</p>

      <div className="flex items-center gap-2">
        <VisitButton link={link} />
        <EditBookmarkButton _id={_id} />
        <DeleteBookmarkButton deleteFunction={() => handleDelete(_id)} />
      </div>
    </div>
  );
};

export default ShowBookmarkItem;
