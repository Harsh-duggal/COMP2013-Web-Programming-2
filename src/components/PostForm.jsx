export default function PostForm({
    newPost, 
    handleOnChange, 
    handleOnSubmit, 
    }) {


    return <div>
        <form action =""  onSubmit = {handleOnSubmit}>
            Title: <input 
            type = "text"
            name = "title"
            value = {newPost.title}
            onChange = {handleOnChange}
            />
            Body: <input 
            type = "text"
            name = "body"
            value = {newPost.body}
            onChange = {handleOnChange}
            />
            <button type = "submit"> Submit</button>
            </form>  
              </div>
};