import {useState} from "react";
import PostForm from "./PostForm";
import PostContainer from "./PostContainer";
export default function PostApp(){

    const[data, setData] = useState([]);
    const [newPost,setNewPost] = useState({ title: "", body: ""});


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
            <PostForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            newPost = {newPost}
            
            />
            <PostContainer posts={data} />
        </div>
    )
}