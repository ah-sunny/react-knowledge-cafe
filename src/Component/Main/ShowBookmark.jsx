import PropTypes from 'prop-types';

const ShowBookmark = ({BookmarkBlog}) => {
    const{title}=BookmarkBlog;
    return (
        <div>
            <h1 className='text-xl font-bold mb-3'>{title}</h1>
            
        </div>
    );
};

ShowBookmark.propTypes = {
    BookmarkBlog:PropTypes.object,
}


export default ShowBookmark;