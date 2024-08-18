/* eslint-disable no-unused-vars */
import { useState } from "react";
import { SaveBookmarkButton } from "../components/Buttons";
import axios from "axios";
import { handleError, handleSuccess } from "../components/ToastMessages";
import { useNavigate } from "react-router-dom";

const AddBookmarkPage = () => {
  const [bookmarkData, setBookmarkData] = useState({
    category: "",
    title: "",
    link: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBookmarkData({
      ...bookmarkData,
      [e.target.name]: e.target.value,
    });
  };

  const BackendUrl = import.meta.env.VITE_BACKEND_URL

  const createBookmark = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BackendUrl}/createBookmark`,
        bookmarkData
      );

      setBookmarkData({
        category: "",
        title: "",
        link: "",
      });
      if (!response.data.success) {
        handleError(response.data.message);
      }
      handleSuccess(response.data.message);
      navigate('/')
    } catch (error) {
      handleError("Error creating bookmark");
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto  bg-opacity-5  pt-[9.5rem]">
        <h1 className="text-3xl text-center font-bold py-2 mb-5">
          Add a Bookmark
        </h1>
        <form
          className="flex flex-col items-center gap-4 "
          onSubmit={createBookmark}
        >
          <input
            type="text"
            placeholder="Enter Category"
            required
            className=" outline-none border-none text-black w-[26rem] py-2 px-2 rounded-md bg-gray-50 bg-opacity-95 "
            value={bookmarkData.category}
            onChange={handleChange}
            name="category"
            autoComplete="off"
          />
          <textarea
            rows={5}
            placeholder="Enter Title"
            required
            className=" outline-none border-none text-black w-[26rem] py-2 px-2 rounded-md bg-gray-50 bg-opacity-95 "
            value={bookmarkData.title}
            onChange={handleChange}
            name="title"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Link"
            required
            className=" outline-none border-none text-black w-[26rem] py-2 px-2 rounded-md bg-gray-50 bg-opacity-95 "
            value={bookmarkData.link}
            onChange={handleChange}
            name="link"
            autoComplete="off"
          />
          <button type="submit">
            <SaveBookmarkButton />
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBookmarkPage;
