import {useState, useEffect} from "react";
import PostForm from "./PostForm";
import PostContainer from "./PostContainer";
export default function PostApp(){

    const[data, setData] = useState([]);
    const [toloading, setLoading]  =useState ({});
     const [newPost,setNewPost] = useState({ title: "", body: ""});
     const URL = "https://jsonplaceholder.typicode.com/posts";


      useEffect(() => {

        fetchPosts();
      }, []); 

    const fetchPosts = async () => {
        const response = await fetch(URL);
        const posts = await response.json();
        setData(posts);
        setLoading(false);
      };


    const handleOnChange = (e) => {
  setNewPost((prevPost) => {
    return {
      ...prevPost,
      [e.target.name]: e.target.value,
    };
  });
};
   const handleOnSubmit = (e) => {
  e.preventDefault();

  setData((prevData) => {
    return [newPost, ...prevData];
  });
  setNewPost({
      title: "",
      body: "",
    });
};

    return(
        <div>
            <h1>Fake API App</h1>
            {toloading && <h2>Loading...</h2>}
            <PostForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            newPost = {newPost}
            
            />
            <PostContainer posts={data} />
        </div>
    );
}