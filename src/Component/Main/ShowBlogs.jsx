import PropTypes from 'prop-types';
import { BsBookmarkStarFill } from "react-icons/bs";

const ShowBlogs = ({blog,handleBookmark,handletime}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags}= blog;
    return (
        <div className='border-2 rounded-2xl space-y-4 p-7'>
            <img className='rounded-2xl w-full h-[400px] ' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <img src={author_img} alt="" className='h-12'/>
                    <div>
                        <h1 className='text-xl font-bold '>{author}</h1>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex'>
                    <span className='text-xl font-bold'>{reading_time} min read <button onClick={()=>handleBookmark(blog)}><BsBookmarkStarFill /></button> </span>
                </div>
            </div>

            <h1 className='text-5xl font-extrabold '>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx} > <a href="">#{hash} </a> </span>)
                }
            </p>
            <button onClick={()=>handletime(reading_time)} className='underline text-blue-400'>Mark as read</button>
            
        </div>
    );
};

ShowBlogs.propTypes = {
    blog: PropTypes.object.isRequired ,
    handleBookmark: PropTypes.func,
    handletime:PropTypes.func,
}



export default ShowBlogs;