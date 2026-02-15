import { useContext, useRef } from "react";
import { pList } from "./store/Postcardsstore";
const Create=()=>{
 const {addPost}=useContext(pList);
const postTitleElement=useRef();
const useridElement=useRef();
const postcontentElement=useRef();
const postLikeElement=useRef();
const postDislikeElement=useRef();
const postTagElement=useRef();
const handleSubmit=(event)=>{
  event.preventDefault();
  const postTitle=postTitleElement.current.value;
  const userid=useridElement.current.value;
  const postcontent=postcontentElement.current.value;
  const postLike=postLikeElement.current.value;
  const postDislike=postDislikeElement.current.value;
  const postTag=postTagElement.current.value.split(" ");
  const postReaction={
    likes:postLike,
    dislikes:postDislike,
  }
  addPost(postTitle,userid,postcontent,postReaction,postTag);

  postTitleElement.current.value="";
  useridElement.current.value="";
  postcontentElement.current.value="";
  postLikeElement.current.value="";
  postDislikeElement.current.value="";
  postTagElement.current.value="";
}
  return (
    <form onSubmit={handleSubmit}>
       <div class="mb-3">
    <label for="userId" class="form-label">User Id</label>
    <input type="text" class="form-control" id="reactions"placeholder="Enter your user id here..." ref={useridElement}/>
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Post Title</label>
    <input type="text" class="form-control" id="title" placeholder="Today's mood..." ref={postTitleElement}/>
  </div>
   <div class="mb-3">
    <label for="body" class="form-label">Content</label>
    <textarea type="text" class="form-control" id="content" rows="4" placeholder="Explain more about your feeling..." ref={postcontentElement}/>
  </div>
   <div class="mb-3">
    <label for="reactions" class="form-label">Likes</label>
    <input type="text" class="form-control" id="reactions"placeholder="How many people liked this post?" ref={postLikeElement}/>
  </div>
  <div class="mb-3">
    <label for="reactions" class="form-label">Dislikes</label>
    <input type="text" class="form-control" id="reactions"placeholder="How many people disliked this post?" ref={postDislikeElement}/>
  </div>
   <div class="mb-3">
    <label for="tags" class="form-label">Tags</label>
    <input type="text" class="form-control" id="tags"placeholder="Enter hashtags with space" ref={postTagElement}/>
  </div>
  <button type="submit" class="btn btn-primary">POST</button>

</form>
  );
}
export default Create;