import posts from './posts.json';
import PostSummaryItem from './PostSummaryItem';

const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group rounded-0">
                {
                    posts.map(post => {
                        return(<PostSummaryItem key = {post.title} post = {post}/>);
                    })
                }
            </ul>
        </>
); }

export default PostSummaryList;
