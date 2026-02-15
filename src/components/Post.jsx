import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { pList } from "./store/Postcardsstore";
 
const Post=({posts})=>{

    const {deletePost}=useContext(pList);
return (<div class="card">
  <div class="card-body">
    <h5 class="card-title">{posts.topic}</h5>
    <p class="card-text">{posts.content}</p>
    {posts.tags.map(item=><button type="button" class="btn btn-primary tagsbutton">{item}
   
</button>)}
<br />
<div class="alert alert-success reactions" role="alert">
 This post has been reacted by {posts.reactions} people
  </div>
  </div>
 <span onClick={()=>deletePost(posts.id)} key={posts.id} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete">
    <MdDelete></MdDelete>
    <span class="visually-hidden">unread messages</span>
  </span>
</div>);
}
export default Post;