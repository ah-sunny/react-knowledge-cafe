import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import ShowBlogs from "./ShowBlogs";


const Blogs = ({ handleBookmark, handletime }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="lg:w-[67%]">
    
            <div className="space-y-10">
                {
                    blogs.map(blog =>
                        <ShowBlogs
                            key={blog.id}
                            handleBookmark={handleBookmark}
                            blog={blog}
                            handletime={handletime}>

                        </ShowBlogs>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func,
    handletime:PropTypes.func,
}

export default Blogs;