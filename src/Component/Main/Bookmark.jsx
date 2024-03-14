import PropTypes from 'prop-types';
import ShowBookmark from './ShowBookmark';

const Bookmark = ({Bookmarks,readingTime}) => {
   console.log(Bookmarks)
    return (
        <div className="lg:w-[30%]">
            <div className='text-xl font-medium p-7 bg-[#6047EC1A] rounded-2xl mb-5' >
                <h1 >Spent time on read : {readingTime} min</h1>
            </div>

            <div className='p-7 bg-[#1111110D] rounded-2xl '>
            <p className='text-center text-2xl font-bold mb-4 border-b-2 pb-3 '>Bookmark Blogs:{Bookmarks.length}</p>
                {
                    Bookmarks.map((bookmark,idx)=> <ShowBookmark key={idx} BookmarkBlog={bookmark}></ShowBookmark> )
                }
            </div>
            
        </div>
    );
};

Bookmark.propTypes ={
    Bookmarks:PropTypes.object,
    readingTime:PropTypes.number,
}


export default Bookmark;