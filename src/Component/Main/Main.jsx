import { useState } from "react";
import Blogs from "./Blogs";
import Bookmark from "./Bookmark";

const Main = () => {

    const [Bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmark = (blog) => {
        const newBookmarks = [...Bookmarks, blog]
        setBookmarks(newBookmarks)
    }
    const handletime = (time) => {
        const newTime = readingTime + time;
        setReadingTime(newTime);
        console.log('time :',time)
    }

    return (
        <main className="w-full lg:flex justify-between mt-5">
            <Blogs
                handleBookmark={handleBookmark}
                handletime={handletime}>

            </Blogs>

            <Bookmark
                Bookmarks={Bookmarks}
                readingTime={readingTime}>

            </Bookmark>


        </main>
    );
};

export default Main;