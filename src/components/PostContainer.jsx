import PostCard from "./PostCard";

export default function PostContainer({ posts, index }) {
    
    return(
    <div className = "PostContainer">
            {posts.map((post) => (
                <PostCard key={index} title ={post.title} body={post.body}/>
            ))}
    </div>
    );
};