export default function PostCard({title, body}) {
    return (<div className = "PostCard">
        {/*input*/}
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
    );
}