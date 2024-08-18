/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { EditAndSaveBookmarkButton } from "../components/Buttons";
import { handleError, handleSuccess } from "../components/ToastMessages";
import axios from "axios";
import { useEffect, useState } from "react";

const EditBookmarkPage = () => {
  const { id } = useParams();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [bookmarkData, setBookmarkData] = useState({
    category: "",
    title: "",
    link: "",
  });

  const navigate = useNavigate()

  useEffect(() => {
    
  const fetchBookmarkData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/getBookmarkById/${id}`);
      setBookmarkData(response.data.bookmark);
    } catch (error) {
      handleError("Error fetching bookmark");
    }
  };
    fetchBookmarkData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookmarkData({
      ...bookmarkData,
      [name]: value,
    });
  };

  const updateBookmark = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${backendUrl}/updateBookmark/${id}`,
        bookmarkData
      );
      setBookmarkData(response.data.bookmark);
      if (!response.data.success) {
        handleError("Error updating bookmark");
      }
      setBookmarkData({
        category: "",
        title: "",
        link: "",
      })
      handleSuccess(response.data.message);
      navigate('/')
    } catch (error) {
      handleError("Error updating bookmark");
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto  bg-opacity-5 pt-[9.5rem]">
        <h1 className="text-3xl text-center font-bold py-2 mb-5">
          Edit Bookmark
        </h1>
        <form
          className="flex flex-col items-center gap-4 "
          onSubmit={updateBookmark}
        >
          <input
            type="text"
            placeholder="Enter Category"
            required
            className=" outline-none border-none text-black w-[26rem] py-2 px-2 rounded-md bg-gray-50 bg-opacity-95 "
            name="category"
            autoComplete="off"
            value={bookmarkData.category}
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="Enter Title"
            required
            className=" outline-none border-none text-black w-[26rem] py-2 px-2 rounded-md bg-gray-50 bg-opacity-95 "
            name="title"
            autoComplete="off"
            value={bookmarkData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Link"
            required
            className=" outline-none border-none text-black w-[26rem] py-2 px-2 rounded-md bg-gray-50 bg-opacity-95 "
            name="link"
            autoComplete="off"
            value={bookmarkData.link}
            onChange={handleChange}
          />
          <button type="submit">
            <EditAndSaveBookmarkButton />
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBookmarkPage;
