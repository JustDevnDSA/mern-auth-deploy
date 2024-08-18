/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ShowBookmarkLists from "../components/ShowBookmarkLists";
import axios from "axios";
import ShowBookmarkItem from "../components/ShowBookmarkItem";
import NoBookmarkFound from "../components/NoBookmarkFound";

const HomePage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const BackendUrl = import.meta.env.VITE_BACKEND_URL;
  const fetchBookmarks = async () => {
    try {
      const response = await axios.get(`${BackendUrl}/getAllBookmarks`);
      setBookmarks(response.data.bookmarks);
    } catch (error) {
      //TODO : toast message
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  useEffect(() => {
    // bookmarks updated
  }, [bookmarks]);

  return (
    <>
      <hr className="py-3  pb-36 md:pb-24 opacity-0" />
      <div className="overflow-x-auto">
      { bookmarks && bookmarks.length > 0 ? bookmarks.map((item, index) => {
        return <ShowBookmarkLists item={item} key={index} fetchBookmarks={fetchBookmarks}/>;
       
      }) : <NoBookmarkFound/> }
      </div>
      <hr className="py-3 opacity-0" />
    </>
  );
};

export default HomePage;
