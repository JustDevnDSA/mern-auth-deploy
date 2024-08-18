/* eslint-disable react/prop-types */
import ShowBookmarkItem from "./ShowBookmarkItem";

const ShowBookmarkLists = ({item,fetchBookmarks}) => {
  const { category,link,title,_id } = item
  return (
    <>
      <div className="flex justify-center flex-col items-center pt-4  px-[32rem]  ">
        <ShowBookmarkItem
          category={category}
          link={link}
          title={title}
          _id={_id}
          fetchBookmarks={fetchBookmarks}
        />
      </div>
    </>
  );
};

export default ShowBookmarkLists;
